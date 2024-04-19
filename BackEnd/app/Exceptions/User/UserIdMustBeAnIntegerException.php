<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UserIdMustBeAnIntegerException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::UserIdMustBeAnInteger->value);

        $this->additionalInfo = [
            'user_id' => $id
        ];
    }
}
