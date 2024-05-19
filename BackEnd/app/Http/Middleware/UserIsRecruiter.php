<?php

namespace App\Http\Middleware;


use App\Domain\User\UserTypeEnum;
use App\Exceptions\Auth\OnlyForRecruitersException;
use App\Models\User;
use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserIsRecruiter extends Middleware
{

    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param string[] ...$guards
     * @return mixed
     *
     * @throws OnlyForRecruitersException
     */
    public function handle($request, Closure $next, ...$guards): mixed
    {
        /** @var User $user */
        $user = Auth::user();

        if (!Auth::check() || $user->type != UserTypeEnum::Recruiter->value) {
            // If the user is not of the expected type, redirect to the login page
            throw new OnlyForRecruitersException();

        }

        return $next($request);
    }
}
