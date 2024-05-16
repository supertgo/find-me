<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class JobsIdFilterMustBePositiveIntegersException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::JobsIdFilterMustBePositiveInteger->value);

        $this->additionalInfo = [
            'nonPositiveIntegerValues' => $values
        ];
    }
}
