<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationStatusIsFinalException extends AbstractFindMeException
{
    public function __construct(string $status)
    {
        parent::__construct(ExceptionMessagesEnum::JobApplicationStatusIsFinalException->value);

        $this->additionalInfo = [
            'status' => $status,
        ];
    }

}
