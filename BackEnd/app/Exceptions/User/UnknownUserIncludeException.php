<?php

namespace App\Exceptions\User;

use App\Domain\User\UserTypeEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UnknownUserIncludeException extends AbstractFindMeException
{
    public function __construct(string|array $unknownOption)
    {
        parent::__construct(ExceptionMessagesEnum::UnknownUserIncludeException->value);

        $this->additionalInfo = [
            'unknown(s)' => $unknownOption,
            'availableIncludes' => UserTypeEnum::values()
        ];
    }
}
