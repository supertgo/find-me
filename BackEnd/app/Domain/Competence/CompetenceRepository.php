<?php

namespace App\Domain\Competence;

use App\Domain\Abstract\AbstractRepository;
use App\Models\Competence;

class CompetenceRepository extends AbstractRepository implements CompetenceRepositoryInterface
{
    public function createIfNotExists(array $competence): array
    {
        $competence = Competence::firstOrCreate(
            [
                'name' => $competence['name'],
                'description' => $competence['description'] ?? null
            ],
            $competence
        );

        return $competence->toArray();
    }

    public function exists(int $id): bool
    {
        return Competence::where('id', $id)->exists();
    }
}
