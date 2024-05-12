<?php

namespace App\Providers\Service;

use App\Domain\User\UserService;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Ramsey\Uuid\Provider\DceSecurityProviderInterface;

class UserServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(DceSecurityProviderInterface::class, UserService::class);
    }
}
