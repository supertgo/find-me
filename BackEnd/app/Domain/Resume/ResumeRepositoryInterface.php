<?php

namespace App\Domain\Resume;

interface ResumeRepositoryInterface
{
    public function save(array $data): array;
}
