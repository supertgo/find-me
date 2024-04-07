<?php

namespace App\Domain\Job;

enum EmploymentTypeEnum: string
{
    case FullTime = 'full-time';
    case PartTime= 'part-time';
}
