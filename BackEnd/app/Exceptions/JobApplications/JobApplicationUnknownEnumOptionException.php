<?php

namespace App\Exceptions\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsIncludesEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationUnknownEnumOptionException extends AbstractFindMeException
{
    public function __construct(string|array $unknownOption)
    {
        parent::__construct(ExceptionMessagesEnum::JobApplicationUnknownEnumOptionException->value);

        $this->additionalInfo = [
            'unknown(s)' => $unknownOption,
            'availableIncludes' => JobApplicationsIncludesEnum::getValues()
        ];
    }
}
