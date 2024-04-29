<?php

namespace App\Domain\Company;

readonly class CompanyDomain implements CompanyDomainInterface
{

    public function __construct(private CompanyRepository $repository)
    {
    }

    public function exists(int $id): bool
    {
        return $this->repository->exists($id);
    }
}