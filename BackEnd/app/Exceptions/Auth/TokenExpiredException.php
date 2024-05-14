<?php

namespace App\Exceptions\Auth;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class TokenExpiredException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::TokenExpiredException->value);

    }
}
