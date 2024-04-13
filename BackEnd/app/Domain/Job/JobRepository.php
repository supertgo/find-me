<?php

namespace App\Domain\Job;

use App\Domain\Abstract\AbstractRepository;
use App\Models\Job;
use DB;

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

    public function getJobOwner(int $id): int
    {
        return DB::table('jobs')
            ->where('id', $id)
            ->first('user_id')
            ->user_id;
    }

    public function delete(int $id): void
    {
        Job::where('id', $id)->delete();
    }

    public function update(JobDomainInterface $job): void
    {
        Job::where('id', $job->getId())->update($job->toArray());
    }

    public function getJobs(): array
    {
        return Job::all()->toArray();
    }

    public function getJob(?int $id): array
    {
       return Job::find($id)->toArray();
    }
}
