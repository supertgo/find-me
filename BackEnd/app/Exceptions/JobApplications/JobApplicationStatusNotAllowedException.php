<?php

namespace App\Exceptions\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobApplicationStatusNotAllowedException extends AbstractFindMeException
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
