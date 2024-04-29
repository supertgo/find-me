<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UserNotFoundException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::UserNotFound->value);

        $this->additionalInfo = [
            'user_id' => $id
        ];
    }
}
