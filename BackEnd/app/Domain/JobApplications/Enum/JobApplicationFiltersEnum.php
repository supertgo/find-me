<?php

namespace App\Domain\JobApplications\Enum;

enum JobApplicationFiltersEnum: string
{
    case JobsId = 'jobsId';
    case CandidatesId = 'candidatesId';
    case DateTimeFrom = 'dateTimeFrom';
    case DateTimeTo = 'dateTimeTo';
    case Status = 'status';
}
