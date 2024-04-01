<?php

namespace app\domain\user;

enum UserTypeEnum: string
{
    case Recruiter = 'recruiter';
    case Employee = 'employee';
}
