<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UserPhoneNotAvailableException extends AbstractFindMeException
{
    public function __construct(string $phone)
    {
        parent::__construct(ExceptionMessagesEnum::UserPhoneNotAvailable->value);

        $this->additionalInfo = [
            'phone' => $phone
        ];
    }
}
