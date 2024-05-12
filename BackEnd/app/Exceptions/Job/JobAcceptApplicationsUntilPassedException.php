<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobAcceptApplicationsUntilPassedException extends AbstractDomainException
{
    public function __construct(string|null $deadline)
    {
        parent::__construct(ExceptionMessagesEnum::JobAcceptApplicationUntilPassed->value);

        $this->additionalInfo = [
            'deadline' => $deadline
        ];
    }
}
