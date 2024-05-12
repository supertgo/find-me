<?php

namespace App\Exceptions\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsIncludesEnum;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationUnknownEnumOptionException extends AbstractDomainException
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
