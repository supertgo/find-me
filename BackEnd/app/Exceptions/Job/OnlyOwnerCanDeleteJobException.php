<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class OnlyOwnerCanDeleteJobException extends AbstractDomainException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::OnlyOwnerCanDeleteJob->value);
    }
}
