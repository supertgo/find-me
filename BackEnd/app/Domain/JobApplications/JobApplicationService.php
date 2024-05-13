<?php

namespace App\Domain\JobApplications;

use App\Domain\Job\JobDomain;
use App\Domain\Job\JobRepository;
use App\Domain\User\UserDomain;
use App\Domain\User\UserRepository;
use App\Exceptions\JobApplications\CandidatesIdFilterMustBePositiveIntegersException;
use App\Exceptions\JobApplications\FilterDateFromMustBeDateAfterException;
use App\Exceptions\JobApplications\JobApplicationNotFoundException;
use App\Exceptions\JobApplications\JobApplicationStatusIsFinalException;
use App\Exceptions\JobApplications\JobApplicationStatusNotAllowedException;
use App\Exceptions\JobApplications\JobApplicationUnknownEnumOptionException;
use App\Exceptions\JobApplications\JobsIdFilterMustBePositiveIntegersException;
use App\Helpers\DataTransaction\DataTransactionServiceInterface;
use Exception;

class JobApplicationService implements JobApplicationServiceInterface
{
    /**
     * @throws Exception
     */
    public function applyToJob(int $jobId, int $userId, array $data): JobApplicationDomain
    {
        $dataTransactionService = app(DataTransactionServiceInterface::class);
        $dataTransactionService->begin();

        try {
            $user = (new UserDomain(new UserRepository()))->loadUser($userId);
            $job = (new JobDomain(new JobRepository()))
                ->setId($jobId)
                ->load()
                ->acceptApplication();

            $jobApplication = (new JobApplicationDomain(new JobApplicationRepository()))
                ->create([
                    'job_id' => $job->getId(),
                    'user_id' => $user->getId(),
                    'cover_letter' => $data['cover_letter'] ?? null
                ]);

            $dataTransactionService->commit();

            return $jobApplication;
        } catch (Exception $exception) {
            $dataTransactionService->rollback();

            throw $exception;
        }
    }

    /**
     * @throws FilterDateFromMustBeDateAfterException
     * @throws JobsIdFilterMustBePositiveIntegersException
     * @throws JobApplicationUnknownEnumOptionException
     * @throws CandidatesIdFilterMustBePositiveIntegersException
     */
    public function getJobApplications(array $filters, array $includes): array
    {
        return (new JobApplicationDomain(new JobApplicationRepository()))->getJobApplications($filters, $includes);
    }

    /**
     * @throws JobApplicationNotFoundException
     * @throws JobApplicationStatusIsFinalException
     * @throws JobApplicationStatusNotAllowedException
     */
    public function updateStatus(string $status, int $jobApplicationId): void
    {
        (new JobApplicationDomain(new JobApplicationRepository()))
            ->load($jobApplicationId)
            ->updateStatus($status);
    }
}
