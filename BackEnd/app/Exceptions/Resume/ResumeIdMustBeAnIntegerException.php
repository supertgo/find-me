<?php

namespace App\Exceptions\Resume;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class ResumeIdMustBeAnIntegerException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::ResumeIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'resume_id' => $id
        ];
    }
}
