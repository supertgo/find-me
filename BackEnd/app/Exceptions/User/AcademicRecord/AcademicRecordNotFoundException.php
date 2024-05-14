<?php

namespace App\Exceptions\User\AcademicRecord;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class AcademicRecordNotFoundException extends AbstractDomainException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::AcademicRecordNotFound->value);

        $this->additionalInfo = [
            'academic_record_id' => $id
        ];
    }
}
