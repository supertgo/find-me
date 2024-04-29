<?php

namespace App\Domain\User\ProfessionalExperience;

interface ProfessionalExperienceRepositoryInterface
{
    public function create(ProfessionalExperienceDomainInterface $current, int $userId): void;
}
