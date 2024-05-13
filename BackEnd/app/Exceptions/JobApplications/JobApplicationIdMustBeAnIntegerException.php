<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationIdMustBeAnIntegerException extends AbstractDomainException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobApplicationIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'job_application_id' => $id
        ];
    }
}
