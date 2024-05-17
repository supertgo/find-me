<?php

namespace App\Domain\JobApplications;

interface JobApplicationRepositoryInterface
{
    public function create(array $data): array;

    public function get(array $includes);

    public function getWithFilters(JobApplicationFiltersInterface $filters, array $includes);

    public function exists(int $jobApplicationId): bool;

    public function load(int $jobApplicationId): array;

    public function updateStatus(int $id, string $status): void;
}
