<?php

namespace App\Http\Controllers;

use App\Domain\Job\JobRepository;
use App\Domain\Job\JobService;
use App\Http\Requests\StoreJobRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class JobController extends Controller
{
    public function store(StoreJobRequest $request): JsonResponse|IluminateResponse
    {
        $repository = app(JobRepository::class);

        $repository->beginTransaction();

        try {
            $service = new JobService($repository);
            $service->fromArray($request->validated());

            $service->save();

            return response()->noContent();

        } catch (Exception $exception) {
            $repository->rollbackTransaction();

            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}