<?php

namespace App\Http\Middleware;

use App\Exceptions\Auth\TokenExpiredException;
use Carbon\Exceptions\InvalidTypeException;
use Closure;
use Exception;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Log;
use Tymon\JWTAuth\Exceptions\TokenExpiredException as JwtTokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;

class Authenticate extends Middleware
{
    /**
     * @throws TokenExpiredException
     */
    public function handle($request, Closure $next, ...$guards)
    {
        try {
            JWTAuth::parseToken()->authenticate();

            return $next($request);
        } catch (JwtTokenExpiredException $e) {
            throw new TokenExpiredException();
        } catch (Exception $e) {
            Log::error($e->getMessage());

            throw new InvalidTypeException();
        }
    }
}
