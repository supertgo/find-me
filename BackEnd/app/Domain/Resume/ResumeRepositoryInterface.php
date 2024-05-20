<?php

namespace App\Domain\Resume;

interface ResumeRepositoryInterface
{
    public function save(array $data): array;

    public function exists(int $resumeId): bool;

    public function get(int $resumeId): array;
}
