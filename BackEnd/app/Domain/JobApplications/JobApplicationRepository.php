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
}
