<?php

namespace App\Exceptions\User\ProfessionalExperience;

use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\ExceptionMessagesEnum;

class MustHaveEndDateWhenFinishedExperienceException extends AbstractDomainException
{
    public function __construct()
    {
        parent::__construct(ExceptionMessagesEnum::ProfessionalExperienceMustHaveEndDateWhenFinished->value);
    }
}
