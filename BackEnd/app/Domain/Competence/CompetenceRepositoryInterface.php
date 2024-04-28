<?php

namespace App\Domain\Competence;

interface CompetenceRepositoryInterface
{
    public function createIfNotExists(array $competence): array;
}