<?php

namespace App\Domain\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsIncludesEnum;
use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Exceptions\JobApplications\CandidatesIdFilterMustBePositiveIntegersException;
use App\Exceptions\JobApplications\FilterDateFromMustBeDateAfterException;
use App\Exceptions\JobApplications\JobApplicationDoesNotExistException;
use App\Exceptions\JobApplications\JobApplicationNotFoundException;
use App\Exceptions\JobApplications\JobApplicationStatusIsFinalException;
use App\Exceptions\JobApplications\JobApplicationStatusNotAllowedException;
use App\Exceptions\JobApplications\JobApplicationUnknownEnumOptionException;
use App\Exceptions\JobApplications\JobsIdFilterMustBePositiveIntegersException;
use Carbon\Carbon;

class JobApplicationDomain
{
    private ?int $id = null;
    private int $jobId;
    private int $userId;
    private JobApplicationsStatusEnum $status;
    private ?string $coverLetter = null;
    private ?Carbon $createdAt = null;
    private ?Carbon $updatedAt = null;

    public function __construct(
        readonly private JobApplicationRepositoryInterface $repository
    )
    {
    }

    /**
     * @throws JobApplicationStatusNotAllowedException
     */
    public function create(array $data): self
    {
        $data['status'] = JobApplicationsStatusEnum::Pending;

        $data = $this
            ->fromArray($data)
            ->repository
            ->create($this->toArray());

        return (new JobApplicationDomain($this->repository))->fromArray($data);
    }

    /**
     * @throws JobApplicationStatusNotAllowedException
     */
    public function setStatus(JobApplicationsStatusEnum|string $status): JobApplicationDomain
    {
        if (is_string($status)) {
            $status = JobApplicationsStatusEnum::tryFrom($status);

            if (!$status) {
                throw new JobApplicationStatusNotAllowedException($status);
            }
        }
        $this->status = $status;

        return $this;
    }

    /**
     * @throws JobApplicationStatusNotAllowedException
     */
    public function fromArray(array $data): self
    {
        $this->setId($data['id'] ?? null);
        $this->setJobId($data['job_id']);
        $this->setUserId($data['user_id']);
        $this->setStatus($data['status']);
        $this->setCoverLetter($data['cover_letter'] ?? null);
        $this->setCreatedAt($data['created_at'] ?? null);
        $this->setUpdatedAt($data['updated_at'] ?? null);

        return $this;
    }

    public function setId(?int $id): JobApplicationDomain
    {
        $this->id = $id;
        return $this;
    }

    public function setJobId(int $jobId): JobApplicationDomain
    {
        $this->jobId = $jobId;

        return $this;
    }

    public function setUserId(int $userId): JobApplicationDomain
    {
        $this->userId = $userId;

        return $this;
    }

    public function setCoverLetter(?string $coverLetter): JobApplicationDomain
    {
        $this->coverLetter = $coverLetter;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->getId(),
            'job_id' => $this->getJobId(),
            'user_id' => $this->getUserId(),
            'status' => $this->getStatus()->value,
            'cover_letter' => $this->getCoverLetter()
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJobId(): int
    {
        return $this->jobId;
    }

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getStatus(): JobApplicationsStatusEnum
    {
        return $this->status;
    }

    public function getCoverLetter(): ?string
    {
        return $this->coverLetter;
    }

    public function getCreatedAt(): ?Carbon
    {
        return $this->createdAt;
    }

    public function setCreatedAt(Carbon|string|null $createdAt): JobApplicationDomain
    {
        $this->createdAt = is_string($createdAt) ? Carbon::parse($createdAt) : $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?Carbon
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(Carbon|string|null $updatedAt): JobApplicationDomain
    {
        $this->updatedAt = is_string($updatedAt) ? Carbon::parse($updatedAt) : $updatedAt;

        return $this;
    }

    /**
     * @throws FilterDateFromMustBeDateAfterException
     * @throws JobsIdFilterMustBePositiveIntegersException
     * @throws JobApplicationUnknownEnumOptionException
     * @throws CandidatesIdFilterMustBePositiveIntegersException
     */
    public function getJobApplications(array $filters, array $includes)
    {
        $this->validateIncludes($includes);

        if (!empty($filters)) {
            $filters = (new JobApplicationFilters())->fromArray($filters);

            return $this->repository->getWithFilters($filters, $includes);
        }

        return $this
            ->repository
            ->get($includes);
    }

    /**
     * @throws JobApplicationUnknownEnumOptionException
     */
    private function validateIncludes(array $includes): self
    {
        $nonExistentIncludes = array_diff($includes, JobApplicationsIncludesEnum::getValues());

        if ($nonExistentIncludes) {
            throw new JobApplicationUnknownEnumOptionException($nonExistentIncludes);
        }

        return $this;
    }

    /**
     * @throws JobApplicationStatusNotAllowedException
     * @throws JobApplicationStatusIsFinalException
     */
    public function updateStatus(string $status): void
    {
        $status = JobApplicationsStatusEnum::tryFrom($status);

        if (!$status) {
            throw new JobApplicationStatusNotAllowedException($status);
        }

        if ($this->status->isFinal()) {
            throw new JobApplicationStatusIsFinalException($status->value);
        }

        $this->setStatus($status);

        $this->repository->updateStatus($this->id, $this->getStatus()->value);
    }

    /**
     * @throws JobApplicationNotFoundException
     * @throws JobApplicationStatusNotAllowedException
     */
    public function load(int $jobApplicationId): self
    {
        if (!$this->repository->exists($jobApplicationId)) {
            throw new JobApplicationNotFoundException($jobApplicationId);
        }

        $data = $this->repository->load($jobApplicationId);

        return $this->fromArray($data);
    }
}
