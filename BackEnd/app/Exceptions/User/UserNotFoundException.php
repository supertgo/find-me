<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class UserNotFoundException extends AbstractDomainException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::UserNotFound->value);

        $this->additionalInfo = [
            'user_id' => $id
        ];
    }
}
