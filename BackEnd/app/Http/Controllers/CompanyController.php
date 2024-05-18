<?php

namespace App\Http\Controllers;

use App\Domain\Company\CompanyServiceInterface;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Http\Requests\Company\IndexCompanyRequest;
use App\Http\Requests\Company\ShowCompanyRequest;
use App\Http\Requests\Company\StoreCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Http\Resources\CompanyResource;
use Exception;
use Illuminate\Http\JsonResponse;
use Log;
use Symfony\Component\HttpFoundation\Response;

class CompanyController
{
    public function store(StoreCompanyRequest $request): JsonResponse
    {
        try {
            $company = app(CompanyServiceInterface::class)
                ->create($request->getLoggedUserId(), $request->validated());

            return CompanyResource::make($company)
                ->toResponse($request)
                ->setStatusCode(Response::HTTP_CREATED);
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

    public function update(UpdateCompanyRequest $request): JsonResponse
    {
        try {
            $company = app(CompanyServiceInterface::class)
                ->update(
                    $request->getLoggedUserId(),
                    $request->validated(),
                    $request->getCompanyId()
                );

            return CompanyResource::make($company)
                ->toResponse($request);
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

    public function show(ShowCompanyRequest $request): JsonResponse
    {
        try {
            $company = app(CompanyServiceInterface::class)
                ->show(
                    $request->getCompanyId()
                );

            return CompanyResource::make($company)
                ->toResponse($request);
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

    public function index(IndexCompanyRequest $request): JsonResponse
    {
        try {
            $companies = app(CompanyServiceInterface::class)->list();

            return CompanyResource::collection($companies)->toResponse($request);
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
