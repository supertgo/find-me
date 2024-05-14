<?php

namespace App\Exceptions;

use App\Exceptions\Abstract\AbstractFindMeException;

class CompanyNotFoundException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::CompanyNotFound->value);

        $this->additionalInfo = [
            'company_id' => $id
        ];
    }
}
