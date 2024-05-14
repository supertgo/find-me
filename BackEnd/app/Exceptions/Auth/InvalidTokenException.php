<?php

namespace App\Exceptions\Auth;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class InvalidTokenException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::TokenInvalidException->value);

    }
}
