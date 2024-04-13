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
}
