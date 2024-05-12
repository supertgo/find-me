<?php

namespace App\Domain\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Exceptions\JobApplications\JobApplicationStatusNotAllowedException;
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
}
