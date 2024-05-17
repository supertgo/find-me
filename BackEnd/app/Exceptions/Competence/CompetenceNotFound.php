<?php

namespace App\Exceptions\Competence;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class CompetenceNotFound extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::CompetenceNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'competence_id' => $id
        ];
    }
}
