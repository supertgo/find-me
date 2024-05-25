<?php

namespace App\Exceptions\Job;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class InvalidAcceptApplicationUntilDateFormatException extends AbstractFindMeException
{
    public function __construct(?string $date, string $format)
    {
        parent::__construct(ExceptionMessagesEnum::InvalidAcceptApplicationUntilDateFormatException->value);

        $this->additionalInfo = [
            'date' => $date,
            'format' => $format
        ];
    }
}
