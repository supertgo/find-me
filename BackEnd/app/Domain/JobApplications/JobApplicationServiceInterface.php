<?php

namespace App\Domain\JobApplications;

interface JobApplicationServiceInterface
{
    function applyToJob(int $jobId, int $userId, array $data): JobApplicationDomain;

    function getJobApplications(array $filters, array $includes): array;
}
