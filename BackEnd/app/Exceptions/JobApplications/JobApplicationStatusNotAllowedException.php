<?php

namespace App\Exceptions\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationStatusNotAllowedException extends AbstractDomainException
{
    public function __construct(string $status)
    {
        parent::__construct(ExceptionMessagesEnum::JobApplicationStatusNotAllowedException->value);

        $this->additionalInfo = [
            'status' => $status,
            'availableStatuses' => JobApplicationsStatusEnum::getValues()
        ];
    }

}
