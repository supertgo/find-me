<?php

namespace App\Exceptions\User\ProfessionalExperience;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class AcademicRecordNotFoundException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::AcademicRecordNotFound->value);

        $this->additionalInfo = [
            'academic_record_id' => $id
        ];
    }
}
