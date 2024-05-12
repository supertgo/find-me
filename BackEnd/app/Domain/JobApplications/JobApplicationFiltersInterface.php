<?php

namespace App\Domain\JobApplications;

use Carbon\Carbon;

interface JobApplicationFiltersInterface
{
    function fromArray(array $data): self;

    function setJobsId(?array $jobsId): self;

    function setCandidatesId(?array $candidatesId): self;

    function setDateTimeFrom(Carbon|null|string $dateTimeFrom): self;

    function setDateTimeTo(Carbon|null|string $dateTimeTo): self;

    function setStatuses(?array $statuses): self;

    function toArray(): array;

    function getJobsId(): ?array;

    function getCandidatesId(): ?array;

    function getDateTimeFrom(): ?Carbon;

    function getDateTimeTo(): ?Carbon;

    function getStatuses(): ?array;
}
