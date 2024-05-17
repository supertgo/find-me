<?php

namespace App\Providers;

use App\Helpers\DataTransaction\DataTransactionService;
use App\Helpers\DataTransaction\DataTransactionServiceInterface;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class DataTransactionProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(DataTransactionServiceInterface::class, DataTransactionService::class);
    }
}
