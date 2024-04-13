<?php

namespace App\Domain\Job;

enum WorkModelEnum: string
{
    case Hybrid = 'hybrid';
    case OnSite= 'onSite';
    case HomeOffice = 'homeOffice';
}
