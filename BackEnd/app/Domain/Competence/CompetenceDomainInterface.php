<?php

namespace App\Domain\Competence;

use Illuminate\Support\Collection;

interface CompetenceDomainInterface
{
    public function __construct(CompetenceRepositoryInterface $repository);

    /**
     * @return Collection<static>
     */
    public function createCompetencesIfNotExist(array $competences): Collection;
}