<?php

namespace App\Providers\Service;

use App\Domain\User\UserService;
use App\Domain\User\UserServiceInterface;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class UserServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(UserServiceInterface::class, UserService::class);
    }
}
