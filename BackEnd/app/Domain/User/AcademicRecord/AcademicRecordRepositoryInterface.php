<?php

namespace App\Domain\User\AcademicRecord;

interface AcademicRecordRepositoryInterface
{
    public function create(AcademicRecordDomainInterface $academicRecord, int $userId): void;

    public function exists(int $recordId): bool;

    public function delete(int $recordId): void;

    public function isOwner(int $recordId, int $userId): bool;
}