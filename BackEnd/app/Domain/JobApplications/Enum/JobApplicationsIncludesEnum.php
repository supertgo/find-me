<?php

namespace App\Domain\JobApplications\Enum;

enum JobApplicationsIncludesEnum: string
{
    case Job = 'job';
    case Candidates = 'candidates';

    public static function getValues(): array
    {
        return array_column(self::cases(), 'value');
    }
}
