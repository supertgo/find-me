<?php

namespace App\Domain\Company;

class CompanyService implements CompanyServiceInterface
{
    public function create(int $responsibleId, array $data): CompanyDomain
    {
        $domain = new CompanyDomain(new CompanyRepository());

        return $domain
            ->fromArray(['responsible_id' => $responsibleId] + $data)
            ->save();
    }
}
