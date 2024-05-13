<?php

namespace App\Providers\Service;

use App\Domain\JobApplications\JobApplicationService;
use App\Domain\JobApplications\JobApplicationServiceInterface;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class JobApplicationsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(JobApplicationServiceInterface::class, JobApplicationService::class);
    }
}
