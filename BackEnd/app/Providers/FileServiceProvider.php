<?php

namespace App\Providers;

use App\helpers\File\FileHelperInterface;
use App\helpers\File\LocalFileHelper;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class FileServiceProvider extends ServiceProvider
{
    public function boot()
    {
        parent::boot();
    }

    public function register(): void
    {
        $this->app->bind(FileHelperInterface::class, LocalFileHelper::class);
    }
}
