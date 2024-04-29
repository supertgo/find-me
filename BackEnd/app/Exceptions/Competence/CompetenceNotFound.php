<?php

namespace App\Exceptions\Competence;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class CompetenceNotFound extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::CompetenceNotFound->value);

        $this->additionalInfo = [
            'competence_id' => $id
        ];
    }
}
