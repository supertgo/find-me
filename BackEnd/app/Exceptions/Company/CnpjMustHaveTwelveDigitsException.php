<?php

namespace App\Exceptions\Company;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Symfony\Component\HttpFoundation\Response;

class CnpjMustHaveTwelveDigitsException extends AbstractFindMeException
{
    public function __construct(?string $cnpj)
    {
        parent::__construct(
            ExceptionMessagesEnum::CnpjMustHaveFourteenDigits->value,
            Response::HTTP_UNPROCESSABLE_ENTITY
        );

        $this->additionalInfo = [
            'cnpj' => $cnpj
        ];
    }
}
