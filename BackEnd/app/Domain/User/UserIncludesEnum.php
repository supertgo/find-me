<?php

namespace App\Domain\User;

use App\Traits\EnumHelper;

enum UserIncludesEnum: string
{
    use EnumHelper;

    case Competences = 'competences';
    case AcademicRecords = 'academicRecords';
    case ProfessionalExperiences = 'professionalExperiences';
}
