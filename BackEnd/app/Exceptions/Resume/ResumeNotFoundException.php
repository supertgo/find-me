<?php

namespace App\Exceptions\Resume;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class ResumeNotFoundException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::ResumeNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'resume_id' => $id
        ];
    }
}
