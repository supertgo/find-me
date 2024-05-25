<?php

namespace App\Exceptions\Job;

use App\Domain\Job\Enum\WorkModelEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class UnknownWorkModelsFilterException extends AbstractFindMeException
{
    public function __construct(array $values)
    {
        parent::__construct(ExceptionMessagesEnum::UnknownWorkModelsFilterException->value);

        $this->additionalInfo = [
            'unknown work model(s)' => $values,
            'available work models' => WorkModelEnum::values()
        ];
    }
}
