<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class CandidatesIdFilterMustBePositiveIntegersException extends AbstractDomainException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::CandidatesIdFilterMustBePositiveInteger->value);

        $this->additionalInfo = [
            'nonPositiveIntegerValues' => $values
        ];
    }
}
