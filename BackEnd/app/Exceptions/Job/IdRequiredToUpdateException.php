<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class IdRequiredToUpdateException extends AbstractDomainException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::IdRequiredToUpdateJob->value);
    }
}
