<?php

namespace App\Exceptions\JobApplications;

use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use Carbon\Carbon;

class FilterDateFromMustBeDateAfterException extends AbstractFindMeException
{
    public function __construct(Carbon $dateFrom, Carbon $dateTo)
    {
        parent::__construct(ExceptionMessagesEnum::FilterDateFromMustBeDateAfter->value);

        $this->additionalInfo = [
            'dateFrom' => $dateFrom->format('Y-m-d H:i:s'),
            'dateTo' => $dateTo->format('Y-m-d H:i:s')
        ];
    }
}
