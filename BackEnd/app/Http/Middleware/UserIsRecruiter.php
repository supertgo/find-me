<?php

namespace App\Http\Middleware;


use App\Domain\User\UserTypeEnum;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Support\Facades\Auth;

class UserIsRecruiter extends Middleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string[]  ...$guards
     * @return mixed
     *
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function handle($request, \Closure $next, ...$guards)
    {
        if (!Auth::check() || Auth::user()->type != UserTypeEnum::Recruiter->value) {
            // If the user is not of the expected type, redirect to the login page
            return redirect('login');
        }

        return $next($request);
    }
}
