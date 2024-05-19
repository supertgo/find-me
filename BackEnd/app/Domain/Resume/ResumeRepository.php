<?php

namespace App\Domain\Resume;

use App\Models\Resume;

class ResumeRepository implements ResumeRepositoryInterface
{
    public function save(array $data): array
    {
        return Resume::create($data)->toArray();
    }
}
