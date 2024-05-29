<?php

namespace App\Exceptions\Job;

use App\Domain\Job\Enum\SalaryTimeUnitEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UnknownSalaryTimeUnitsFilterException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::UnknownSalaryTimeUnitsFilterException->value);

        $this->additionalInfo = [
            'unknown salary time unit(s)' => $values,
            'available salary time units' => SalaryTimeUnitEnum::values()
        ];
    }
}
