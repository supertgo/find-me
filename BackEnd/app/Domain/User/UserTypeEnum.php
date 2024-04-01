<?php

namespace App\Domain\User;

enum UserTypeEnum: string
{
    case Recruiter = 'recruiter';
    case Employee = 'employee';
}
