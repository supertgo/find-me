<?php

namespace App\Domain\User\AcademicRecord;

interface AcademicRecordDomainInterface
{
    public function __construct(AcademicRecordRepositoryInterface $repository);

    public function createMany(array $records, int $userId): void;

    public function fromArray(array $record): self;

    public function toArray(): array;

    public function exists(int $recordId): bool;

    public function isOwner(int $recordId, int $userId): bool;

    public function getId(): ?int;

    public function setId(int $id): self;

    public function getInstitution(): string;

    public function getDegree(): string;

    public function getFieldOfStudy(): string;

    public function getStartDate(): string;

    public function getEndDate(): ?string;

    public function IsOnProgress(): bool;

    public function getDescription(): ?string;

}
