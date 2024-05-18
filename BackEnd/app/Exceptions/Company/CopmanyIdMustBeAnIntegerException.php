<?php

namespace App\Exceptions\Company;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class CopmanyIdMustBeAnIntegerException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::JobIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'job_id' => $id
        ];
    }
}
