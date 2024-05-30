<?php

namespace App\Domain\Job\Enum;

use App\Traits\EnumHelper;

enum EmploymentTypeEnum: string
{
    use EnumHelper;
    case FullTime = 'full-time';
    case PartTime = 'part-time';
}
