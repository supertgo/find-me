<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class SalaryToMustBeBiggerThanFromException extends AbstractFindMeException
{
    public function __construct(int $from, int $to)
    {
        parent::__construct(ExceptionMessagesEnum::SalaryToMustBeBiggerThanFrom->value);

        $this->additionalInfo = [
            'salaries' => [
                'from' => $from,
                'to' => $to
            ]
        ];
    }
}
