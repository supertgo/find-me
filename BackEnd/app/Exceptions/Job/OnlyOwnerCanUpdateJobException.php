<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class OnlyOwnerCanUpdateJobException extends AbstractDomainException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::OnlyOwnerCanUpdateJob->value);
    }
}
