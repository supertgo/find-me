<?php

namespace App\Exceptions\Resume;

use App\Domain\Resume\ResumeTypeEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class ResumeTypeNotAllowedException extends AbstractFindMeException
{
    public function __construct(string $type)
    {
        parent::__construct(ExceptionMessagesEnum::ResumeTypeNotAllowedException->value);

        $this->additionalInfo = [
            'type' => $type,
            'availableStatuses' => ResumeTypeEnum::values()
        ];
    }

}
