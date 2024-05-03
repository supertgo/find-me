<?php

namespace App\Domain\Abstract;

use Exception;
use Illuminate\Support\Facades\Log;
use Throwable;

class AbstractService
{
    /**
     * @throws Throwable
     */
    public function commonLogLogic(AbstractRepository $repository, Exception $exception): void
    {
        $repository->rollbackTransaction();

        Log::error($exception);
    }
}
