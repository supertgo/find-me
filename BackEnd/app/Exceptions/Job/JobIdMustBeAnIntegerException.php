<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobIdMustBeAnIntegerException extends AbstractDomainException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'job_id' => $id
        ];
    }
}
