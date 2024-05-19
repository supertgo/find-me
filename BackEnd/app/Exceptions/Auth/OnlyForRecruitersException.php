<?php

namespace App\Exceptions\Auth;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class OnlyForRecruitersException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(
            ExceptionMessagesEnum::OnlyForRecruitersException->value,
            Response::HTTP_UNAUTHORIZED
        );

    }
}
