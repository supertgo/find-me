<?php

namespace App\Exceptions\User\AcademicRecord;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class OnlyOwnerCanDeleteAcademicRecordException extends AbstractDomainException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::OnlyOwnerCanDeleteAcademicRecord->value);

        $this->additionalInfo = [
            'academic_record_id' => $id
        ];
    }
}
