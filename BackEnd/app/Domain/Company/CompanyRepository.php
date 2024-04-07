<?php

namespace App\Domain\Company;

use App\Models\Company;

class CompanyRepository implements CompanyDomainInterface
{
    public function exists(int $id): bool
    {
        return Company::whereId($id)->exists();
    }
}