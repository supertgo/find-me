<?php

namespace App\Exceptions\User\AcademicRecord;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class OnlyOwnerCanDeleteAcademicRecordException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::OnlyOwnerCanDeleteAcademicRecord->value,
            Response::HTTP_UNAUTHORIZED
        );

        $this->additionalInfo = [
            'academic_record_id' => $id
        ];
    }
}
