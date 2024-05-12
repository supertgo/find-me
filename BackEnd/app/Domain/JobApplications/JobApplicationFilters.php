<?php

namespace App\Domain\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Exceptions\JobApplications\CandidatesIdFilterMustBePositiveIntegersException;
use App\Exceptions\JobApplications\FilterDateFromMustBeDateAfterException;
use App\Exceptions\JobApplications\JobApplicationUnknownEnumOptionException;
use App\Exceptions\JobApplications\JobsIdFilterMustBePositiveIntegersException;
use Carbon\Carbon;

class JobApplicationFilters implements JobApplicationFiltersInterface
{
    private ?array $jobsId = null;
    private ?array $candidatesId = null;
    private ?array $statuses = null;
    private ?Carbon $dateTimeFrom = null;
    private ?Carbon $dateTimeTo = null;

    /**
     * @throws FilterDateFromMustBeDateAfterException
     * @throws JobsIdFilterMustBePositiveIntegersException
     * @throws JobApplicationUnknownEnumOptionException
     * @throws CandidatesIdFilterMustBePositiveIntegersException
     */
    public function fromArray(array $data): self
    {
        $this->setJobsId($data['jobsId'] ?? null);
        $this->setCandidatesId($data['candidatesId'] ?? null);
        $this->setDateTimeFrom($data['dateTimeFrom'] ?? null);
        $this->setDateTimeTo($data['dateTimeTo'] ?? null);
        $this->setStatuses($data['status'] ?? null);

        return $this;
    }

    /**
     * @throws JobsIdFilterMustBePositiveIntegersException
     */
    public function setJobsId(?array $jobsId): JobApplicationFilters
    {
        if ($jobsId) {
            $nonIntegerValues = array_filter($jobsId, fn($value) => !is_int($value) || $value < 1);

            if (!empty($nonIntegerValues)) {
                throw new JobsIdFilterMustBePositiveIntegersException($nonIntegerValues);
            }
        }

        return $this;
    }

    /**
     * @throws CandidatesIdFilterMustBePositiveIntegersException
     */
    public function setCandidatesId(?array $candidatesId): JobApplicationFilters
    {
        if ($candidatesId) {
            $nonIntegerValues = array_filter($candidatesId, fn($value) => !is_int($value) || $value < 1);

            if (!empty($nonIntegerValues)) {
                throw new CandidatesIdFilterMustBePositiveIntegersException($nonIntegerValues);
            }
        }

        return $this;
    }

    public function setDateTimeFrom(Carbon|null|string $dateTimeFrom): JobApplicationFilters
    {
        $this->dateTimeFrom = is_string($dateTimeFrom) ? Carbon::parse($dateTimeFrom) : $dateTimeFrom;

        return $this;
    }

    /**
     * @throws FilterDateFromMustBeDateAfterException
     */
    public function setDateTimeTo(Carbon|null|string $dateTimeTo): JobApplicationFilters
    {
        $this->dateTimeTo = is_string($dateTimeTo) ? Carbon::parse($dateTimeTo) : $dateTimeTo;

        if (isset($this->dateTimeFrom) && isset($this->dateTimeTo) && $this->dateTimeFrom->gt($this->dateTimeTo)) {
            throw new FilterDateFromMustBeDateAfterException($this->dateTimeFrom, $this->dateTimeTo);
        }

        return $this;
    }

    /**
     * @throws JobApplicationUnknownEnumOptionException
     */
    public function setStatuses(?array $statuses): JobApplicationFilters
    {
        array_walk($statuses, fn($status) => $this->validateStatus($status));

        $this->statuses = $statuses;

        return $this;
    }

    /**
     * @throws JobApplicationUnknownEnumOptionException
     */
    public function validateStatus(?array $statuses): JobApplicationsStatusEnum
    {
        $statuses = JobApplicationsStatusEnum::tryFrom($statuses);

        if (!$statuses) {
            throw new JobApplicationUnknownEnumOptionException($statuses);
        }
        return $statuses;
    }

    public function toArray(): array
    {
        return [
            'jobsId' => $this->jobsId,
            'candidatesId' => $this->candidatesId,
            'dateTimeFrom' => $this->dateTimeFrom?->toDateTimeString(),
            'dateTimeTo' => $this->dateTimeTo?->toDateTimeString(),
            'status' => $this->getStatuses()
        ];
    }

    public function getJobsId(): ?array
    {
        return $this->jobsId;
    }

    public function getCandidatesId(): ?array
    {
        return $this->candidatesId;
    }

    public function getDateTimeFrom(): ?Carbon
    {
        return $this->dateTimeFrom;
    }

    public function getDateTimeTo(): ?Carbon
    {
        return $this->dateTimeTo;
    }

    public function getStatuses(): ?array
    {
        return $this->statuses;
    }
}
