<?php

namespace App\Http\Controllers;

use App\Domain\User\UserService;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Http\Requests\User\PrefessionalExperience\AddProfessionalExperienceRequest;
use App\Http\Requests\User\PrefessionalExperience\DeleteProfessionalExperiencesRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IluminateResponse;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserProfessionalExperience extends Controller
{
    public function addProfessionalExperiences(
        AddProfessionalExperienceRequest $request
    ): JsonResponse|IluminateResponse
    {
        try {
            (new UserService())
                ->addProfessionalExperiences(
                    $request->getLoggedUserId(),
                    $request->validated('professional_experiences')
                );

            return response()->noContent();
        } catch (AbstractDomainException $exception) {
            return response()->json(
                $exception->render(),
                status: Response::HTTP_UNPROCESSABLE_ENTITY
            );
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteProfessionalExperiences(
        DeleteProfessionalExperiencesRequest $request
    ): JsonResponse|IluminateResponse
    {
        try {
            (new UserService())
                ->removeProfessionalExperiences(
                    $request->getLoggedUserId(),
                    $request->validated('professional_experiences_id')
                );

            return response()->noContent();
        } catch (AbstractDomainException $exception) {
            return response()->json(
                $exception->render(),
                status: Response::HTTP_UNPROCESSABLE_ENTITY
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
