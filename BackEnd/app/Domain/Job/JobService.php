<?php

namespace App\Domain\Job;

use App\Domain\Abstract\AbstractService;
use App\Domain\Company\CompanyDomain;
use App\Domain\Company\CompanyRepository;
use App\Domain\Competence\CompetenceDomain;
use App\Domain\Competence\CompetenceRepository;
use App\Exceptions\CompanyNotFoundException;
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
        try {
            $repository = app(JobRepository::class);

            $repository->beginTransaction();

            $domain = new JobDomain($repository);
            $domain->fromArray($data + ['user_id' => $userId]);

            if (!(new CompanyDomain(new CompanyRepository()))->exists($domain->getCompanyId())) {
                throw new CompanyNotFoundException($domain->getCompanyId());
            }

            $domain = $domain->save();

            if (array_key_exists('competences', $data)) {
                $competenceDomain = new CompetenceDomain(new CompetenceRepository());

                $competences = $competenceDomain->createCompetencesIfNotExist($data['competences']);

                $domain->attachCompetences($competences);
            }

            $repository->commitTransaction();
        } catch (Exception $exception) {
            $this->commonLogLogic($repository, $exception);

            throw $exception;
        }

    }

}