<?php

namespace App\Domain\Competence;

interface CompetenceRepositoryInterface
{
    public function createIfNotExists(array $competence): array;

    public function exists(int $id): bool;
}