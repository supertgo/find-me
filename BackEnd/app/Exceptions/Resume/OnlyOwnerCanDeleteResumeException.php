<?php

namespace App\Exceptions\Resume;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class OnlyOwnerCanDeleteResumeException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(
            ExceptionMessagesEnum::OnlyOwnerCanDeleteResume->value,
            Response::HTTP_UNAUTHORIZED
        );
    }
}
