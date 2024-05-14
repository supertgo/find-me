<?php

namespace App\Exceptions\User\AcademicRecord;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class OnlyOwnerCanDeleteAcademicRecordException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::OnlyOwnerCanDeleteAcademicRecord->value);

        $this->additionalInfo = [
            'academic_record_id' => $id
        ];
    }
}
