<?php

namespace App\Http\Controllers;

use App\Domain\Company\CompanyDomain;
use App\Domain\Company\CompanyRepository;
use App\Domain\Job\JobRepository;
use App\Domain\Job\JobDomain;
use App\Exceptions\CompanyNotFoundException;
use App\Exceptions\Job\JobIdMustBeAnIntegerException;
use App\Exceptions\Job\JobNotFoundException;
use App\Http\Requests\Job\StoreJobRequest;
use App\Http\Requests\Job\UpdateJobRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class JobController extends Controller
{
    /**
     * @throws CompanyNotFoundException
     */
    public function store(StoreJobRequest $request): JsonResponse|IluminateResponse
    {
        $repository = app(JobRepository::class);

        $repository->beginTransaction();

        $service = new JobDomain($repository);
        $service->fromArray($request->validated() + ['user_id' => $request->getLoggedUserId()]);

        if (!(new CompanyDomain(new CompanyRepository()))->exists($service->getCompanyId())){
            throw new CompanyNotFoundException($service->getCompanyId());
        }

        try {
            $service->save();

            $repository->commitTransaction();

            return response(status: Response::HTTP_CREATED);

        } catch (Exception $exception) {
            $repository->rollbackTransaction();

            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @throws CompanyNotFoundException
     * @throws JobNotFoundException
     * @throws JobIdMustBeAnIntegerException
     */
    public function update(UpdateJobRequest $request): JsonResponse|IluminateResponse
    {
        $repository = app(JobRepository::class);

        $repository->beginTransaction();

        $service = new JobDomain($repository);
        $service->fromArray(
            $request->validated() + [
                'user_id' => $request->getLoggedUserId(),
                'id' => $request->getJobId()
            ]);

        if (!$service->exists($service->getId())) {
            throw new JobNotFoundException($service->getId());
        }

        if (!(new CompanyDomain(new CompanyRepository()))->exists($service->getCompanyId())) {
            throw new CompanyNotFoundException($service->getCompanyId());
        }

        try {
            $service->update();

            $repository->commitTransaction();

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
