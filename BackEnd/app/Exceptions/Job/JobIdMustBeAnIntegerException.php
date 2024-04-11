<?php

namespace App\Exceptions\Job;

use App\Exceptions\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobIdMustBeAnIntegerException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'job_id' => $id
        ];
    }
}
