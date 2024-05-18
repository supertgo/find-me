<?php

namespace App\Exceptions\Company;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;

class CnpjMustHaveTwelveDigitsException extends AbstractFindMeException
{
    public function __construct(?string $cnpj)
    {
        parent::__construct(
            ExceptionMessagesEnum::CnpjMustHaveFourteenDigits->value,
        );

        $this->additionalInfo = [
            'cnpj' => $cnpj
        ];
    }
}
