<?php

namespace App\Domain\Job\Enum;

use App\Traits\EnumHelper;

enum SalaryTimeUnitEnum: string
{
    use EnumHelper;

    case Hour = 'hour';
    case Day = 'day';
    case Week = 'week';
    case Month = 'month';
}
