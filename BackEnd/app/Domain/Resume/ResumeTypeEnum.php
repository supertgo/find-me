<?php

namespace App\Domain\Resume;

use App\Traits\EnumHelper;

enum ResumeTypeEnum: string
{
    use EnumHelper;

    case File = 'file';
    case Form = 'form';
}
