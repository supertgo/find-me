<?php

namespace App\Http\Controllers;

use App\Domain\Abstract\AbstractRepository;
use App\Domain\Company\CompanyDomain;
use App\Domain\Company\CompanyRepository;
use App\Domain\Job\JobDomain;
use App\Domain\Job\JobRepository;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\CompanyNotFoundException;
use App\Exceptions\Job\JobIdMustBeAnIntegerException;
use App\Exceptions\Job\JobNotFoundException;
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
    /**
     * @throws CompanyNotFoundException
     */
    public function store(StoreJobRequest $request): JsonResponse|IluminateResponse
    {
        $repository = app(JobRepository::class);

        $repository->beginTransaction();

        $service = new JobDomain($repository);
        $service->fromArray($request->validated() + ['user_id' => $request->getLoggedUserId()]);

        if (!(new CompanyDomain(new CompanyRepository()))->exists($service->getCompanyId())) {
            throw new CompanyNotFoundException($service->getCompanyId());
        }

        try {
            $service->save();

            $repository->commitTransaction();

            return response(status: Response::HTTP_CREATED);

        } catch (Exception $exception) {
            $this->commonLogLogic($repository, $exception);

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
        } catch (AbstractDomainException $exception) {
            $this->commonLogLogic($repository, $exception);

            return response()->json(
                $exception->render(),
                status: Response::HTTP_UNPROCESSABLE_ENTITY
            );
        } catch (Exception $exception) {
            $this->commonLogLogic($repository, $exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @throws JobNotFoundException
     * @throws JobIdMustBeAnIntegerException
     * @throws Throwable
     */
    public function destroy(JobRequestHavingId $request): JsonResponse|IluminateResponse
    {
        $repository = app(JobRepository::class);

        $repository->beginTransaction();

        $service = new JobDomain($repository);
        $service->setId($request->getJobId())
            ->setUserId($request->getLoggedUserId());

        if (!$service->exists($service->getId())) {
            throw new JobNotFoundException($service->getId());
        }

        try {
            $service->delete();

            $repository->commitTransaction();

            return response()->noContent();
        } catch (AbstractDomainException $exception) {
            $this->commonLogLogic($repository, $exception);

            return response()->json(
                $exception->render(),
                status: Response::HTTP_UNPROCESSABLE_ENTITY
            );
        } catch (Exception $exception) {
            $this->commonLogLogic($repository, $exception);

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
        $repository = app(JobRepository::class);
        $service = new JobDomain($repository);

        try {
            return response()
                ->json([
                    'data' => $service->jobsWithIncludes($request->getIncludes())
                ]);
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @throws JobNotFoundException
     * @throws JobIdMustBeAnIntegerException
     */
    public function show(ShowJobRequest $request): JsonResponse|IluminateResponse
    {
        $repository = app(JobRepository::class);

        $domain = new JobDomain($repository);
        $domain->setId($request->getJobId())
            ->setUserId($request->getLoggedUserId());

        if (!$domain->exists($domain->getId())) {
            throw new JobNotFoundException($domain->getId());
        }

        try {
            $job = $domain->getJobWithIncludes($request->getIncludes());

            return response()->json([
                'data' => $job
            ]);
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
