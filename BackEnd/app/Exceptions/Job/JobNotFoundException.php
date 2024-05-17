<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class JobNotFoundException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::JobNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'job_id' => $id
        ];
    }
}
