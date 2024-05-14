<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class UserEmailNotAvailableException extends AbstractDomainException
{
    public function __construct(string $email)
    {
        parent::__construct(ExceptionMessagesEnum::UserEmailNotAvailable->value);

        $this->additionalInfo = [
            'email' => $email
        ];
    }
}
