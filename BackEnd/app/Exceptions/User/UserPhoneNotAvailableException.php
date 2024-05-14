<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class UserPhoneNotAvailableException extends AbstractDomainException
{
    public function __construct(string $phone)
    {
        parent::__construct(ExceptionMessagesEnum::UserPhoneNotAvailable->value);

        $this->additionalInfo = [
            'phone' => $phone
        ];
    }
}
