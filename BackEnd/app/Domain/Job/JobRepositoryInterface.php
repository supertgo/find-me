<?php

namespace App\Domain\Job;

use App\Prototype\RegisterRequestPrototype;

interface JobRepositoryInterface
{
    public function createJob(JobDomainInterface $job): void;

    public function jobExists(int $id): bool;

    public function updateJob(JobDomainInterface $job): void;
}
