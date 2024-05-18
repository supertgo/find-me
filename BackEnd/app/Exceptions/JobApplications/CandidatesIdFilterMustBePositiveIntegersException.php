<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class CandidatesIdFilterMustBePositiveIntegersException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::CandidatesIdFilterMustBePositiveInteger->value);

        $this->additionalInfo = [
            'nonPositiveIntegerValues' => $values
        ];
    }
}
