<?php

namespace App\Domain\Competence;

use App\Domain\Competence\Enum\CompetenceTypesEnum;
use App\Models\Competence;

class CompetenceRepository implements CompetenceRepositoryInterface
{
    public function createIfNotExists(array $competence): array
    {
        $competence = Competence::firstOrCreate(
            [
                'name' => $competence['name'],
                'description' => $competence['description'] ?? null,
                'type' => $competence['type'] ?? CompetenceTypesEnum::Other->value,
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
