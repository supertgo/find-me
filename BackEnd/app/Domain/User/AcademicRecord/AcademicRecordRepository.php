<?php

namespace App\Domain\User\AcademicRecord;


use App\Models\AcademicRecord;

class AcademicRecordRepository implements AcademicRecordRepositoryInterface
{
    public function create(AcademicRecordDomainInterface $academicRecord, int $userId): void
    {
        AcademicRecord::create(
            ['user_id' => $userId] + $academicRecord->toArray()
        );
    }

    public function exists(int $recordId): bool
    {
        return AcademicRecord::where('id', $recordId)->exists();
    }

    public function delete(int $recordId): void
    {
        AcademicRecord::where('id', $recordId)->delete();
    }

    public function isOwner(int $recordId, int $userId): bool
    {
        return AcademicRecord::where('id', $recordId)
            ->where('user_id', $userId)
            ->exists();
    }
}
