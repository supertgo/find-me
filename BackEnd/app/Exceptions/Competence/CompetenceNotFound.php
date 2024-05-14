<?php

namespace App\Exceptions\Competence;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class CompetenceNotFound extends AbstractDomainException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::CompetenceNotFound->value);

        $this->additionalInfo = [
            'competence_id' => $id
        ];
    }
}
