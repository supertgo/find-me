<?php

namespace App\Http\Controllers;

use App\Domain\Resume\ResumeServiceInterface;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Http\Requests\Resume\CreateResumeRequest;
use App\Http\Resources\ResumeResource;
use Exception;
use Illuminate\Http\JsonResponse;
use Log;
use Symfony\Component\HttpFoundation\Response;

class ResumeController extends Controller
{
    public function store(CreateResumeRequest $request): JsonResponse
    {
        try {
            $resume = app(ResumeServiceInterface::class)
                ->create($request->validated(), $request->getLoggedUserId());

            return ResumeResource::make($resume)
                ->toResponse($request)
                ->setStatusCode(Response::HTTP_CREATED);
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
