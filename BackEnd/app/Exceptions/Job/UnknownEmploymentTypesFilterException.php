<?php

namespace App\Exceptions\Job;

use App\Domain\Job\Enum\EmploymentTypeEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UnknownEmploymentTypesFilterException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::UnknownEmploymentTypesFilterException->value);

        $this->additionalInfo = [
            'unknown employment type(s)' => $values,
            'available employment types units' => EmploymentTypeEnum::values()
        ];
    }
}
