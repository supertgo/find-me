<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class JobApplicationNotFoundException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::JobApplicationNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'job_application_id' => $id
        ];
    }
}
