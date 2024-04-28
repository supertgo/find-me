<?php

namespace App\Http\Controllers;

use App\Domain\User\UserDomain;
use App\Domain\User\UserRepository;
use App\Domain\User\UserService;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\Job\JobNotFoundException;
use App\Exceptions\User\UserIdMustBeAnIntegerException;
use App\Http\Requests\Auth\RegisterUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Requests\User\UserRequestHavingId;
use App\Http\Requests\UserCompetence\AddCompetencesRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserCompetenceController extends Controller
{
    public function addCompetences(AddCompetencesRequest $request): JsonResponse|IluminateResponse
    {
        try {
            app(UserService::class)
                ->addCompetencesToUser(
                    $request->getLoggedUserId(),
                    $request->validated('competences')
                );

            return response()->noContent();
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
