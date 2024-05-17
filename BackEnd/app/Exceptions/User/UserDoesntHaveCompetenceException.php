<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UserDoesntHaveCompetenceException extends AbstractFindMeException
{
    public function __construct(?int $userId, ?int $competenceId)
    {
        parent::__construct(ExceptionMessagesEnum::UserDoesntHaveCompetence->value);

        $this->additionalInfo = [
            'user_id' => $userId,
            'competence_id' => $competenceId
        ];
    }
}
