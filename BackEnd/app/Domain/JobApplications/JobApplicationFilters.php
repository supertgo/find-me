<?php

namespace App\Domain\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Exceptions\JobApplications\CandidatesIdFilterMustBePositiveIntegersException;
use App\Exceptions\JobApplications\FilterDateFromMustBeDateAfterException;
use App\Exceptions\JobApplications\JobApplicationUnknownEnumOptionException;
use App\Exceptions\JobApplications\JobIdsFilterMustBePositiveIntegersException;
use App\Exceptions\JobApplications\JobsIdFilterMustBePositiveIntegersException;
use Carbon\Carbon;

class JobApplicationFilters
{
    private ?array $jobsId = null;
    private ?array $candidatesId = null;
    private ?JobApplicationsStatusEnum $status = null;
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
        $this->setStatus($data['status'] ?? null);

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
    public function setStatus(JobApplicationsStatusEnum|null|string $status): JobApplicationFilters
    {
        if (is_string($status)) {
            $status = JobApplicationsStatusEnum::tryFrom($status);

            if (!$status) {
                throw new JobApplicationUnknownEnumOptionException($status);
            }
        }

        $this->status = $status;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'jobsId' => $this->jobsId,
            'candidatesId' => $this->candidatesId,
            'dateTimeFrom' => $this->dateTimeFrom?->toDateTimeString(),
            'dateTimeTo' => $this->dateTimeTo?->toDateTimeString(),
            'status' => $this->status?->value
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

}
