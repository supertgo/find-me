<?php

namespace App\Domain\Competence\Enum;

enum CompetenceTypesEnum: string
{
    case Language = 'language';
    case Framework = 'framework';
    case ProgrammingLanguage = 'programmingLanguage';
    case Technology = 'technology';
    case Other = 'other';

    public static function getValuesAsString(): string
    {
        return implode(',', array_column(self::cases(), 'value'));
    }
}
