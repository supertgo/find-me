<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class JobsIdFilterMustBePositiveIntegersException extends AbstractDomainException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::JobsIdFilterMustBePositiveInteger->value);

        $this->additionalInfo = [
            'nonPositiveIntegerValues' => $values
        ];
    }
}
