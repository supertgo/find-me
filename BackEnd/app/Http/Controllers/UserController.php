<?php

namespace App\Http\Controllers;

use App\Domain\User\UserDomain;
use App\Domain\User\UserRepository;
use App\Domain\User\UserService;
use App\Exceptions\Job\JobNotFoundException;
use App\Exceptions\User\UserIdMustBeAnIntegerException;
use App\Http\Requests\User\UserRequestHavingId;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

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
        try {
            return response()->json([
                'data' =>   app(UserService::class)->getUser($request->getUserId())
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
