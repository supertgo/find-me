<?php

namespace App\Domain\Company;

interface CompanyServiceInterface
{
    function create(int $responsibleId, array $data): CompanyDomain;

    function update(int $responsibleId, array $data, int $companyId): CompanyDomain;

    function show(int $companyId): CompanyDomain;

    function list(): array;
}
