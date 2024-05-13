<?php

namespace App\Domain\JobApplications;

use App\Models\JobApplication;

class JobApplicationRepository implements JobApplicationRepositoryInterface
{
    public function create(array $data): array
    {
        return JobApplication::create($data)->toArray();
    }

    public function get(array $includes): array
    {
        return JobApplication::with($includes)->get()->toArray();
    }

    public function getWithFilters(JobApplicationFiltersInterface $filters, array $includes): array
    {
        return JobApplication::with($includes)
            ->when($filters->getJobsId(), function ($query) use ($filters) {
                $query->whereIn('job_id', $filters->getJobsId());
            })
            ->when($filters->getCandidatesId(), function ($query) use ($filters) {
                $query->whereIn('user_id', $filters->getCandidatesId());
            })
            ->when($filters->getDateTimeFrom(), function ($query) use ($filters) {
                $query->where('created_at', '>=', $filters->getDateTimeFrom());
            })
            ->when($filters->getDateTimeTo(), function ($query) use ($filters) {
                $query->where('created_at', '<=', $filters->getDateTimeTo());
            })
            ->when($filters->getStatuses(), function ($query) use ($filters) {
                $query->where('status', $filters->getStatuses());
            })
            ->get()
            ->toArray();
    }
}
