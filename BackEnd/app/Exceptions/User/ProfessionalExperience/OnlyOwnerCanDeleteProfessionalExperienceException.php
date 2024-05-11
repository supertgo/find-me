<?php

namespace App\Exceptions\User\ProfessionalExperience;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class OnlyOwnerCanDeleteProfessionalExperienceException extends AbstractDomainException
{
    public function __construct(?int $id)
    {
        parent::__construct(ExceptionMessagesEnum::OnlyOwnerCanDeleteProfessionalExperience->value);

        $this->additionalInfo = [
            'professional_experience_id' => $id
        ];
    }
}
