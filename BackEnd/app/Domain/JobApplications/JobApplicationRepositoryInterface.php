<?php

namespace App\Domain\JobApplications;

interface JobApplicationRepositoryInterface
{
    public function create(array $data): array;
}
