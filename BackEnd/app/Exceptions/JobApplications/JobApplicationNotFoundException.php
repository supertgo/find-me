<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationNotFoundException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobApplicationNotFound->value);

        $this->additionalInfo = [
            'job_application_id' => $id
        ];
    }
}
