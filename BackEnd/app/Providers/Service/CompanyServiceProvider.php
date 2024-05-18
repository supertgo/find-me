<?php

namespace App\Providers\Service;

use App\Domain\Company\CompanyService;
use App\Domain\Company\CompanyServiceInterface;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class CompanyServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(CompanyServiceInterface::class, CompanyService::class);
    }
}
