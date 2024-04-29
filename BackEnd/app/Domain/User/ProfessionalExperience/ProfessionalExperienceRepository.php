<?php

namespace App\Domain\User\ProfessionalExperience;

use App\Domain\Abstract\AbstractRepository;
use App\Models\professionalExperience;

class ProfessionalExperienceRepository extends AbstractRepository implements ProfessionalExperienceRepositoryInterface
{
    public function create(ProfessionalExperienceDomainInterface $current, int $userId): void
    {
        professionalExperience::create(['user_id' => $userId] + $current->toArray());
    }
}
