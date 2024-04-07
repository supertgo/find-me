<?php

namespace App\Exceptions;

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
