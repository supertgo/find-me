<?php

namespace App\Http\Controllers;


use App\Domain\Job\JobServiceInterface;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Http\Requests\Job\IndexJobRequest;
use App\Http\Requests\Job\JobRequestHavingId;
use App\Http\Requests\Job\ShowJobRequest;
use App\Http\Requests\Job\StoreJobRequest;
use App\Http\Requests\Job\UpdateJobRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class JobController extends Controller
{
    public function store(StoreJobRequest $request): JsonResponse|IluminateResponse
    {
        try {
            app(JobServiceInterface::class)
                ->store($request->validated(), $request->getLoggedUserId());

            return response(status: Response::HTTP_CREATED);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Throwable) {
            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @throws Throwable
     */
    public function update(UpdateJobRequest $request): JsonResponse|IluminateResponse
    {
        try {
            app(JobServiceInterface::class)
                ->update(
                    $request->validated(),
                    $request->getLoggedUserId(),
                    $request->getJobId()
                );

            return response(status: Response::HTTP_NO_CONTENT);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Throwable) {
            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy(JobRequestHavingId $request): JsonResponse|IluminateResponse
    {
        try {
            app(JobServiceInterface::class)
                ->destroy($request->getJobId(), $request->getLoggedUserId());

            return response()->noContent();
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
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

    public function index(IndexJobRequest $request): JsonResponse|IluminateResponse
    {
        try {
            return response()
                ->json([
                    'data' => app(JobServiceInterface::class)
                        ->index($request->getFilters(), $request->getIncludes())
                ]);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show(ShowJobRequest $request): JsonResponse|IluminateResponse
    {
        try {
            $job = app(JobServiceInterface::class)
                ->show($request->getJobId(), $request->getIncludes());

            return response()->json([
                'data' => $job
            ]);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
