<?php

namespace App\Domain\Job;

interface JobServiceInterface
{
    function store(array $data, int $userId): void;

    function update(array $data, int $userId, int $jobId): void;

    function createCompetences(array $data, JobDomain $domain): void;
}
