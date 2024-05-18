<?php

namespace App\Http\Controllers;

use App\Domain\JobApplications\JobApplicationServiceInterface;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Http\Requests\JobApplications\CreateJobApplicationsRequest;
use App\Http\Requests\JobApplications\JobApplicationIndexRequests;
use App\Http\Requests\JobApplications\JobApplicationUpdateStatusRequest;
use App\Http\Resources\JobApplicationResource;
use Exception;
use Log;
use Symfony\Component\HttpFoundation\Response;

class JobApplicationsController extends Controller
{
    public function store(CreateJobApplicationsRequest $request): Response
    {
        try {
            $jobApplication = app(JobApplicationServiceInterface::class)
                ->applyToJob($request->getJobId(), $request->getLoggedUserId(), $request->validated());

            return JobApplicationResource::make($jobApplication)
                ->toResponse($request)
                ->setStatusCode(Response::HTTP_CREATED);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getCode()
            );
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function index(JobApplicationIndexRequests $request): Response
    {
        try {
            $jobApplications = app(JobApplicationServiceInterface::class)
                ->getJobApplications($request->getFilters(), $request->getIncludes());

            return response()->json(['data' => $jobApplications], status: Response::HTTP_OK);
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getCode()
            );
        } catch (Exception $exception) {
            Log::error($exception);

            return response()
                ->json(
                    ['error' => 'Server error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateStatus(JobApplicationUpdateStatusRequest $request): Response
    {
        try {
            app(JobApplicationServiceInterface::class)->updateStatus(
                $request->getStatus(),
                $request->getJobApplicationId(),
                $request->getLoggedUserId()
            );

            return response()->noContent();
        } catch (AbstractFindMeException  $exception) {
            return response()->json(
                $exception->render(),
                status: $exception->getCode()
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
