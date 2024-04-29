<?php

namespace App\Domain\User\AcademicRecord;

interface AcademicRecordRepositoryInterface
{
    public function create(AcademicRecordDomainInterface $academicRecord, int $userId): void;
}