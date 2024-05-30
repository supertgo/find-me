<?php

namespace App\Providers\Service;

use App\Domain\Job\JobService;
use App\Domain\Job\JobServiceInterface;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class JobServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(JobServiceInterface::class, JobService::class);
    }
}
