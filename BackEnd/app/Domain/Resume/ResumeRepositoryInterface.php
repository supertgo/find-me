<?php

namespace App\Domain\Resume;

interface ResumeRepositoryInterface
{
    public function save(array $data): array;

    public function exists(int $resumeId): bool;

    public function get(int $resumeId): array;

    public function updateAlias(int $id, string $alias): void;

    public function updateFile(int $id, string $path): void;

    public function getResumes(int $ownerId): array;
}
