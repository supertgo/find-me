<?php

namespace App\Domain\Company;

use App\Models\Company;

class CompanyRepository implements CompanyRepositoryInterface
{
    public function exists(int $id): bool
    {
        return Company::whereId($id)->exists();
    }

    public function save(array $data): array
    {
        return Company::create($data)->toArray();
    }

    public function update(array $data): array
    {
        $company = Company::find($data['id']);
        $company->update($data);

        return $company->toArray();
    }

    public function load(int $companyId): array
    {
        return Company::find($companyId)->toArray();
    }

    public function list(): array
    {
        return Company::all()->toArray();
    }
}
