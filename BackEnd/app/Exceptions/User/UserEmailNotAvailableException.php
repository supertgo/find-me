<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UserEmailNotAvailableException extends AbstractFindMeException
{
    public function __construct(string $email)
    {
        parent::__construct(ExceptionMessagesEnum::UserEmailNotAvailable->value);

        $this->additionalInfo = [
            'email' => $email
        ];
    }
}
