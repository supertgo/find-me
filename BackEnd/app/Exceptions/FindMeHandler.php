<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class FindMeHandler extends Handler
{
    public function render($request, Throwable $e)
    {
        if ($e instanceof AbstractFindMeException) {
            return response()->json([
                'message' => $e->getMessage(),
                'additional_info' => $e->getAdditionalInfo(),
            ], $e->getHttpCode());
        }

        return parent::render($request, $e);
    }
}
