<?php

namespace App\Domain\Job;

use App\Domain\Abstract\AbstractService;
use App\Domain\Company\CompanyDomain;
use App\Domain\Company\CompanyRepository;
use App\Domain\Competence\CompetenceDomain;
use App\Domain\Competence\CompetenceRepository;
use App\Exceptions\Company\CompanyNotFoundException;
use App\Exceptions\Job\JobNotFoundException;
use Exception;
use Throwable;

class JobService extends AbstractService
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

            $domain->update();

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
}
