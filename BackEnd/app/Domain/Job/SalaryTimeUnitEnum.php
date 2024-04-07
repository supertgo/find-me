<?php

namespace App\Domain\Job;

enum SalaryTimeUnitEnum: string
{
    case Hour = 'hour';
    case Day = 'day';
    case Week = 'week';
    case Month = 'month';
}
