<?php

namespace App\Http\Controllers;

use App\Domain\Abstract\AbstractRepository;
use App\Domain\Company\CompanyDomain;
use App\Domain\Company\CompanyRepository;
use App\Domain\Job\JobDomain;
use App\Domain\Job\JobRepository;
use App\Domain\User\UserDomain;
use App\Domain\User\UserRepository;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\CompanyNotFoundException;
use App\Exceptions\Job\JobIdMustBeAnIntegerException;
use App\Exceptions\Job\JobNotFoundException;
use App\Exceptions\User\UserIdMustBeAnIntegerException;
use App\Http\Requests\Job\JobRequestHavingId;
use App\Http\Requests\Job\StoreJobRequest;
use App\Http\Requests\Job\UpdateJobRequest;
use App\Http\Requests\User\UserRequestHavingId;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UserController extends Controller
{
    public function index(): JsonResponse|IluminateResponse
    {
        $service = new UserDomain(app(UserRepository::class));

        try {
            return response()
                ->json([
                    'data' => $service->users()
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
     * @throws UserIdMustBeAnIntegerException
     */
    public function show(UserRequestHavingId $request): JsonResponse|IluminateResponse
    {
        $repository = app(UserRepository::class);

        $service = new UserDomain($repository);
        $service->setId($request->getUserId());

        if (!$service->exists($service->getId())) {
            throw new JobNotFoundException($service->getId());
        }

        try {
            $service->load();

            $repository->commitTransaction();

            return response()->json([
                'data' => $service->toArray()
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
