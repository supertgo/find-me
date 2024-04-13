<?php

namespace App\Domain\Company;

class CompanyDomain implements CompanyDomainInterface
{

    public function __construct(private readonly CompanyRepository $repository)
    {
    }

    public function exists(int $id): bool
    {
        return $this->repository->exists($id);
    }
}