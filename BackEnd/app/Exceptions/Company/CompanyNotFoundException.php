<?php

namespace App\Exceptions\Company;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class CompanyNotFoundException extends AbstractFindMeException
{
    public function __construct(string $id)
    {
        parent::__construct(
            ExceptionMessagesEnum::CompanyNotFound->value,
            Response::HTTP_NOT_FOUND
        );

        $this->additionalInfo = [
            'company_id' => $id
        ];
    }
}
