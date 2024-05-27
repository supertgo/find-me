<?php

namespace App\Domain\User;

use App\Traits\EnumHelper;

enum UserTypeEnum: string
{
    use EnumHelper;

    case Recruiter = 'recruiter';
    case Employee = 'employee';
}
