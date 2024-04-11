<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class IdRequiredToUpdateException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::IdRequiredToUpdateJob->value);
    }
}
