<?php

namespace App\Http\Controllers;

use App\Domain\Abstract\AbstractRepository;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;
use Throwable;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function handleException(\Exception $exception): JsonResponse
    {
        DB::rollBack();
        Log::error($exception);
        return response()->json(
            ['error' => 'Server error'],
            SymfonyResponse::HTTP_INTERNAL_SERVER_ERROR
        );
    }

    /**
     * @param AbstractRepository $repository
     * @param Exception $exception
     * @return void
     * @throws Throwable
     */
    public function commonLogLogic(AbstractRepository $repository, Exception $exception): void
    {
        $repository->rollbackTransaction();

        Log::error($exception);
    }
}
