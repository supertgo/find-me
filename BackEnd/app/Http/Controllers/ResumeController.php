<?php

namespace App\Http\Controllers;

use App\Domain\Resume\ResumeServiceInterface;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Helpers\File\FileHelperInterface;
use App\Http\Requests\Resume\CreateResumeRequest;
use App\Http\Requests\Resume\DeleteResumeRequest;
use App\Http\Requests\Resume\DownloadResumeRequest;
use App\Http\Requests\Resume\IndexResumeRequest;
use App\Http\Requests\Resume\PatchResumeFileRequest;
use App\Http\Requests\Resume\PatchResumeStatusRequest;
use App\Http\Requests\Resume\ShowResumeRequest;
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
                ->create(
                    $request->validated(),
                    $request->getLoggedUserId(),
                    $request->file('resume_file')
                );

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

    public function patchAlias(PatchResumeStatusRequest $request): Response
    {
        try {
            $resume = app(ResumeServiceInterface::class)
                ->updateAlias(
                    $request->getResumeId(),
                    $request->getLoggedUserId(),
                    $request->getAlias()
                );

            return ResumeResource::make($resume)
                ->toResponse($request)
                ->setStatusCode(Response::HTTP_OK);
        } catch (AbstractFindMeException $exception) {
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

    public function patchFile(PatchResumeFileRequest $request): Response
    {
        try {
            app(ResumeServiceInterface::class)
                ->updateFile(
                    $request->getResumeId(),
                    $request->getLoggedUserId(),
                    $request->getFile()
                );

            return response(status: Response::HTTP_NO_CONTENT);
        } catch (AbstractFindMeException $exception) {
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

    public function download(DownloadResumeRequest $request): Response
    {
        try {
            $path = app(ResumeServiceInterface::class)
                ->getFilePath(
                    $request->getResumeId(),
                    $request->getLoggedUserId()
                );

            return app(FileHelperInterface::class)
                ->downloadPrivateFile($path);
        } catch (AbstractFindMeException $exception) {
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

    public function show(ShowResumeRequest $request): Response
    {
        try {
            $resume = app(ResumeServiceInterface::class)
                ->get(
                    $request->getResumeId(),
                    $request->getLoggedUserId()
                );

            return ResumeResource::make($resume)
                ->toResponse($request)
                ->setStatusCode(Response::HTTP_OK);
        } catch (AbstractFindMeException $exception) {
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

    public function index(IndexResumeRequest $request): Response
    {
        try {
            $resumes = app(ResumeServiceInterface::class)
                ->getUserResumes(
                    $request->getLoggedUserId()
                );

            return ResumeResource::collection($resumes)
                ->toResponse($request)
                ->setStatusCode(Response::HTTP_OK);
        } catch (AbstractFindMeException $exception) {
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

    public function destroy(DeleteResumeRequest $request): Response
    {
        try {
            app(ResumeServiceInterface::class)
                ->delete(
                    $request->getResumeId(),
                    $request->getLoggedUserId(),
                );

            return response(status: Response::HTTP_NO_CONTENT);
        } catch (AbstractFindMeException $exception) {
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
