<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationIdMustBeAnIntegerException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobApplicationIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'job_application_id' => $id
        ];
    }
}
