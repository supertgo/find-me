<?php

namespace App\Exceptions;

use App\Exceptions\Abstract\AbstractDomainException;

class CompanyNotFoundException extends AbstractDomainException
{
    public function __construct(string $id)
    {
        parent::__construct(ExceptionMessagesEnum::CompanyNotFound->value);

        $this->additionalInfo = [
            'company_id' => $id
        ];
    }
}
