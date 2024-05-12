<?php

namespace App\Domain\JobApplications\Enum;

enum JobApplicationFiltersEnum: string
{
    case JobsId = 'jobsId';
    case CandidatesId = 'candidatesId';
    case DateTimeFrom = 'dateTimeFrom';
    case DateTimeTo = 'dateTimeTo';
    case Statuses = 'statuses';

    public static function getValuesAsString(): string
    {
        return implode(',', array_column(self::cases(), 'value'));
    }
}
