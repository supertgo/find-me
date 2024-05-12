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
}
