<?php

namespace App\Domain\Job;

use App\Domain\Abstract\AbstractService;
use App\Domain\Company\CompanyDomain;
use App\Domain\Company\CompanyRepository;
use App\Domain\Competence\CompetenceDomain;
use App\Domain\Competence\CompetenceRepository;
use App\Exceptions\Company\CompanyNotFoundException;
use App\Exceptions\Job\IdRequiredToUpdateException;
use App\Exceptions\Job\JobNotFoundException;
use App\Exceptions\Job\OnlyOwnerCanUpdateJobException;
use App\Helpers\DataTransaction\DataTransactionService;
use Exception;
use Throwable;

class JobService extends AbstractService implements JobServiceInterface
{
    /**
     * @throws Throwable
     * @throws CompanyNotFoundException
     */
    public function store(array $data, int $userId): void
    {
        $repository = new JobRepository();
        try {
            $repository->beginTransaction();

            $domain = new JobDomain($repository);
            $domain->fromArray($data + ['user_id' => $userId]);

            if (!(new CompanyDomain(new CompanyRepository()))->exists($domain->getCompanyId())) {
                throw new CompanyNotFoundException($domain->getCompanyId());
            }

            $domain = $domain->save();

            $this->createCompetences($data, $domain);

            $repository->commitTransaction();
        } catch (Exception $exception) {
            $this->commonLogLogic($repository, $exception);

            throw $exception;
        }
    }

    /**
     * @throws Throwable
     * @throws CompanyNotFoundException
     */
    public function update(array $data, int $userId, int $jobId): void
    {
        $repository = new JobRepository();

        try {
            $repository->beginTransaction();

            $domain = new JobDomain($repository);

            $domain->fromArray(
                $data + [
                    'user_id' => $userId,
                    'id' => $jobId
                ]);

            if (!$domain->exists($domain->getId())) {
                throw new JobNotFoundException($domain->getId());
            }

            if (!(new CompanyDomain(new CompanyRepository()))->exists($domain->getCompanyId())) {
                throw new CompanyNotFoundException($domain->getCompanyId());
            }

            $domain->update()
                ->deleteCompetences();

            $this->createCompetences($data, $domain);

            $repository->commitTransaction();

        } catch (Throwable $exception) {
            $this->commonLogLogic($repository, $exception);

            throw $exception;
        }
    }

    /**
     * @param array $data
     * @param JobDomain $domain
     * @return void
     */
    public function createCompetences(array $data, JobDomain $domain): void
    {
        if (array_key_exists('competences', $data)) {
            $competenceDomain = new CompetenceDomain(new CompetenceRepository());

            $competences = $competenceDomain->createCompetencesIfNotExist($data['competences']);

            $domain->attachCompetences($competences);
        }
    }

    /**
     * @throws Throwable
     * @throws JobNotFoundException
     * @throws IdRequiredToUpdateException
     * @throws OnlyOwnerCanUpdateJobException
     */
    public function destroy(int $jobId, int $solicitorId): void
    {
        $dataTransactionService = app(DataTransactionService::class);
        $dataTransactionService->begin();

        try {
            $repository = app(JobRepository::class);

            $domain = new JobDomain($repository);
            $domain->setId($jobId)
                ->setUserId($solicitorId);

            if (!$domain->exists($domain->getId())) {
                throw new JobNotFoundException($domain->getId());
            }
            $domain->delete();

            $dataTransactionService->commit();
        } catch (Throwable $exception) {
            $dataTransactionService->rollback();

            throw $exception;
        }
    }
}
