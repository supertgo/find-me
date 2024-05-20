<?php

namespace App\Domain\Resume;

use App\Models\Resume;

class ResumeRepository implements ResumeRepositoryInterface
{
    public function save(array $data): array
    {
        return Resume::create($data)->toArray();
    }

    public function exists(int $resumeId): bool
    {
        return Resume::where('id', $resumeId)->exists();
    }

    public function get(int $resumeId): array
    {
        return Resume::find($resumeId)->toArray();
    }

    public function updateAlias(int $getId, string $alias): void
    {
        Resume::where('id', $getId)->update(['alias' => $alias]);
    }
}
