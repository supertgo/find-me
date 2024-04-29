<?php

namespace App\Exceptions;

enum ExceptionMessagesEnum: string
{
    case CompanyNotFound = 'Company not found';

    case JobNotFound = 'Job not found';
    case IdRequiredToUpdateJob = 'Job id is required to update job';
    case JobIdMustBeAnInteger = 'Job id must be an integer';
    case OnlyOwnerCanDeleteJob = 'Only owner can delete job';
    case OnlyOwnerCanUpdateJob = 'Only owner can update job';

    case UserIdMustBeAnInteger = 'User id must be an integer';
    case UserEmailNotAvailable = 'User email is not available';
    case UserPhoneNotAvailable = 'User phone is not available';
    case UserNotFound = 'User not found';
    case UserDoesntHaveCompetence = 'User doesn\'t have competence';

    case CompetenceNotFound = 'Competence not found';

    case AcademicRecordMustHaveEndDateWhenUnfinished = 'Academic record must have end date when unfinished';
    case AcademicRecordEndDateMustBeAfterStartDate = 'Academic record end date must be after start date';
    case AcademicRecordNotFound = 'Academic record not found';
    case OnlyOwnerCanDeleteAcademicRecord = 'Only owner can delete academic record';
}
