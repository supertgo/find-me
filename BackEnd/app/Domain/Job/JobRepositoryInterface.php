<?php

namespace App\Domain\Job;

interface JobRepositoryInterface
{
    public function createJob(JobDomainInterface $job): void;

    public function jobExists(int $id): bool;

    public function update(JobDomainInterface $job): void;

    public function getJobOwner(int $id): int;

    public function delete(int $id): void;

    public function getJobs(): array;
}
