<?php

namespace App\Http\Controllers;

use App\Domain\User\UserServiceInterface;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Http\Requests\AbstractRequest;
use App\Http\Requests\User\IndexUserRequest;
use App\Http\Requests\User\ShowUserRequest;
use App\Http\Requests\User\UpdateUserProfilePictureRequest;
use App\Http\Requests\User\UpdateUserRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UserController extends Controller
{
    public function index(IndexUserRequest $request): JsonResponse|IluminateResponse
    {
        try {
            $service = app(UserServiceInterface::class);

            return response()
                ->json([
                    'data' => $service->usersWithIncludes(
                        $request->getFilters(),
                        $request->getIncludes()
                    )
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

    public function show(ShowUserRequest $request): JsonResponse|IluminateResponse
    {
        try {
            return response()->json([
                'data' => app(UserServiceInterface::class)
                    ->getUser($request->getUserId(), $request->getIncludes())
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

    public function update(UpdateUserRequest $request): JsonResponse|IluminateResponse
    {
        try {
            $user = app(UserServiceInterface::class)
                ->update(
                    ['id' => $request->getLoggedUserId()] + $request->validated()
                );

            return response()->json([
                'data' => $user
            ]);
        } catch (AbstractFindMeException $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Exception) {
            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateProfilePicture(UpdateUserProfilePictureRequest $request): IluminateResponse|JsonResponse
    {
        try {
            $url = app(UserServiceInterface::class)
                ->updateProfilePicture(
                    $request->getLoggedUserId(), $request->file('profile_picture')
                );

            return response()->json([
                'url' => $url
            ]);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Throwable $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteProfilePicture(AbstractRequest $request): IluminateResponse|JsonResponse
    {
        try {
            app(UserServiceInterface::class)
                ->deleteProfilePicture($request->getLoggedUserId());

            return response()->noContent();
        } catch (AbstractFindMeException $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getHttpCode()
            );
        } catch (Throwable $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
