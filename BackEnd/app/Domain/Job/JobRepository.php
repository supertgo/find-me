<?php

namespace App\Domain\Job;

use App\Domain\Abstract\AbstractRepository;
use App\Mail\UserForgotPassword;
use App\Models\Job;
use App\Models\User;
use App\Prototype\RegisterRequestPrototype;
use Illuminate\Support\Facades\Hash;
use Mail;

class JobRepository extends AbstractRepository implements JobRepositoryInterface
{
    public function createJob(JobDomainInterface $job): void
    {
        Job::create($job->toArray());
    }

    public function jobExists(int $id): bool
    {
        return Job::where('id', $id)->exists();
    }

    public function updateJob(JobDomainInterface $job): void
    {
        Job::where('id', $job->getId())->update($job->toArray());
    }
}
