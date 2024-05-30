<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class WeekWorkloadMustBePositiveException extends AbstractFindMeException
{
    public function __construct(?int $workload)
    {
        parent::__construct(ExceptionMessagesEnum::WeekWorkloadMustBePositiveInteger->value);

        $this->additionalInfo = [
            'workload' => $workload,
        ];
    }
}
