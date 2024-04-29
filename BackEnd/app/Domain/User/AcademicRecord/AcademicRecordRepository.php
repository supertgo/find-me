<?php

namespace App\Domain\User\AcademicRecord;

use App\Domain\Abstract\AbstractRepository;
use App\Models\AcademicRecord;

class AcademicRecordRepository extends AbstractRepository implements AcademicRecordRepositoryInterface
{

    public function create(AcademicRecordDomainInterface $academicRecord, int $userId): void
    {
        AcademicRecord::create(
            ['user_id' => $userId] + $academicRecord->toArray()
        );
    }

}