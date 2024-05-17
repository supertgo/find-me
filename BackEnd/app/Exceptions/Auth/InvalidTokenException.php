<?php

namespace App\Exceptions\Auth;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class InvalidTokenException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(
            ExceptionMessagesEnum::TokenInvalidException->value,
            Response::HTTP_UNAUTHORIZED
        );

    }
}
