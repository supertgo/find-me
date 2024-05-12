<?php

namespace App\Http\Controllers;

use App\Domain\JobApplications\JobApplicationServiceInterface;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Http\Requests\JobApplications\CreateJobApplicationsRequest;
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
