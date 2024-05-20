<?php

namespace App\Exceptions\Resume;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class OnlyOwnerCanPatchResumeAliasException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(
            ExceptionMessagesEnum::OnlyOwnerCanPatchResumeAlias->value,
            Response::HTTP_UNAUTHORIZED
        );
    }
}
