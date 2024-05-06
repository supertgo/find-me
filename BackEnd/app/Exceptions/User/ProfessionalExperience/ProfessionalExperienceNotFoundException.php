<?php

namespace App\Exceptions\User\ProfessionalExperience;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class ProfessionalExperienceNotFoundException extends AbstractFindMeException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::ProfessionalExperienceNotFound->value);

        $this->additionalInfo = [
            'professional_experience_id' => $id
        ];
    }
}
