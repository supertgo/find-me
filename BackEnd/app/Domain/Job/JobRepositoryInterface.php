<?php

namespace App\Domain\Job;

use App\Prototype\RegisterRequestPrototype;

interface JobRepositoryInterface
{
    public function createJob(JobServiceInterface $job): void;
}
