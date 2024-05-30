<?php

namespace App\Domain\Job\Enum;

use App\Traits\EnumHelper;

enum WorkModelEnum: string
{
    use EnumHelper;
    case Hybrid = 'hybrid';
    case OnSite= 'onSite';
    case HomeOffice = 'homeOffice';
}
