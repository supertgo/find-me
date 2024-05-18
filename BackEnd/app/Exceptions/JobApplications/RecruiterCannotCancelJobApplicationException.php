<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class RecruiterCannotCancelJobApplicationException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::RecruiterCannotCancelJobApplication->value);
    }
}
