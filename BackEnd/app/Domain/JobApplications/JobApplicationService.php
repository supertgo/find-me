<?php

namespace App\Domain\JobApplications;

use App\Domain\Job\JobDomain;
use App\Domain\Job\JobRepository;
use App\Domain\User\UserDomain;
use App\Domain\User\UserRepository;
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
            $user = app(UserDomain::class, [app(UserRepository::class)])->loadUser($userId);
            $job = app(JobDomain::class, [app(JobRepository::class)])
                ->setId($jobId)
                ->load()
                ->acceptApplication();

            $jobApplication = app(JobApplicationDomain::class, [app(JobApplicationRepository::class)])
                ->create([
                    'job_id' => $job->getId(),
                    'user_id' => $user->getId(),
                    'reason' => $data['reason'] ?? null
                ]);

            $job->incrementApplicationsCount();

            $dataTransactionService->commit();

            return $jobApplication;
        } catch (Exception $exception) {
            $dataTransactionService->rollback();

            throw $exception;
        }
    }
}
