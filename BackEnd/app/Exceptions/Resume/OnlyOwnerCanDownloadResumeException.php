<?php

namespace App\Exceptions\Resume;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class OnlyOwnerCanDownloadResumeException extends AbstractFindMeException
{
    public function __construct()
    {
        parent::__construct(
            ExceptionMessagesEnum::OnlyOwnerCanDownloadResume->value,
            Response::HTTP_UNAUTHORIZED
        );
    }
}
