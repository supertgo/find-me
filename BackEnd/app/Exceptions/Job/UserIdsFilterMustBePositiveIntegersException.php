<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UserIdsFilterMustBePositiveIntegersException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::UserIdsFilterMustBePositiveIntegers->value);

        $this->additionalInfo = [
            'nonPositiveIntegerValues' => $values
        ];
    }
}
