<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobNotFoundException extends AbstractDomainException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobNotFound->value);

        $this->additionalInfo = [
            'job_id' => $id
        ];
    }
}
