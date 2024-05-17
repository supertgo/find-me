<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class UserNotFoundException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::UserNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'user_id' => $id
        ];
    }
}
