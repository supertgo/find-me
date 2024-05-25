<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class WeekWorkloadToMustBeBiggerThanFromException extends AbstractFindMeException
{
    public function __construct(int $from, int $to)
    {
        parent::__construct(ExceptionMessagesEnum::WeekWorkloadToMustBeBiggerThanFrom->value);

        $this->additionalInfo = [
            'workloads' => [
                'from' => $from,
                'to' => $to
            ]
        ];
    }
}
