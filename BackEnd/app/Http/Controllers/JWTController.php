<?php

namespace App\Http\Controllers;


use App\Domain\User\UserRepository;
use App\Domain\User\UserService;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Prototype\RegisterRequestPrototype;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class JWTController extends Controller
{
    public function register(RegisterUserRequest $request): Response
    {
        $repository = new UserRepository();

        try {
            $repository->beginTransaction();

            (new UserService($repository))->createUser(RegisterRequestPrototype::fromRequest($request->all()));
            $repository->commitTransaction();
            return response()->noContent();
        } catch (Exception $exception) {
            Log::error($exception);
            $repository->rollbackTransaction();
            return response()->json(['error' => 'Server error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = $request->all(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken(string $token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60 * 24,
            'user' => new UserResource(auth()->user())
        ]);
    }

    /**
     * Get the authenticated User.
     *
     * @return UserResource
     */
    public function me(): UserResource
    {
        return new UserResource(auth()->user());
    }

    /**
     * Log the User out (Invalidate the token).
     *
     * @return JsonResponse
     */
    public function logout(): Response
    {
        auth()->logout();

        return response()->json(['message' => trans('auth.logout')]);
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh(): Response
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function verify(): Response
    {
        return response()->json([
            'message' => trans('auth.success'),
        ]);
    }

    public function forgotPassword(ForgotPasswordRequest $request, User $user): Response
    {
        app(UserService::class)->forgotPassword($user);

        return response()->json([
            'message' => trans('auth.success'),
        ]);
    }
}
