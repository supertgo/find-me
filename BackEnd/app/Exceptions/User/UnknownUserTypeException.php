<?php

namespace App\Exceptions\User;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UnknownUserTypeException extends AbstractFindMeException
{
    public function __construct(?string $type)
    {
        parent::__construct(ExceptionMessagesEnum::UnknownUserTypeException->value);

        $this->additionalInfo = [
            'type' => $type
        ];
    }
}
