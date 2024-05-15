<?php

namespace App\Exceptions\Auth;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class TokenExpiredException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(
            ExceptionMessagesEnum::TokenExpiredException->value,
            Response::HTTP_UNAUTHORIZED
        );

    }
}
