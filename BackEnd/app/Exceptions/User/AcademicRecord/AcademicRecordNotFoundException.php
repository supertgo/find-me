<?php

namespace App\Exceptions\User\AcademicRecord;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class AcademicRecordNotFoundException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::AcademicRecordNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'academic_record_id' => $id
        ];
    }
}
