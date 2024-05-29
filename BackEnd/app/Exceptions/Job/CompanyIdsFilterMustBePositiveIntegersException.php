<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class CompanyIdsFilterMustBePositiveIntegersException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::CompanyIdsFilterMustBePositiveIntegers->value);

        $this->additionalInfo = [
            'nonPositiveIntegerValues' => $values
        ];
    }
}
