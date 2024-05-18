<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobAcceptApplicationsUntilPassedException extends AbstractFindMeException
{
    public function __construct(string|null $deadline)
    {
        parent::__construct(ExceptionMessagesEnum::JobAcceptApplicationUntilPassed->value);

        $this->additionalInfo = [
            'deadline' => $deadline
        ];
    }
}
