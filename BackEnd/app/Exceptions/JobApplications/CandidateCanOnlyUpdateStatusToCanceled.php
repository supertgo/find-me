<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class CandidateCanOnlyUpdateStatusToCanceled extends AbstractFindMeException
{
    public function __construct(string $desiredStatus)
    {
        parent::__construct(ExceptionMessagesEnum::CandidateCanOnlyUpdateStatusToCanceled->value);

        $this->additionalInfo = [
            'desiredStatus' => $desiredStatus
        ];
    }
}
