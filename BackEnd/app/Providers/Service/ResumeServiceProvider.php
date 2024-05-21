<?php

namespace App\Providers\Service;

use App\Domain\Resume\ResumeService;
use App\Domain\Resume\ResumeServiceInterface;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class ResumeServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(ResumeServiceInterface::class, ResumeService::class);
    }
}
