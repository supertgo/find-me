<?php

namespace App\Domain\Company;

use App\Exceptions\Company\CnpjMustHaveTwelveDigitsException;

class CompanyService implements CompanyServiceInterface
{
    /**
     * @throws CnpjMustHaveTwelveDigitsException
     */
    public function create(int $responsibleId, array $data): CompanyDomain
    {
        $domain = new CompanyDomain(new CompanyRepository());

        return $domain
            ->fromArray(['responsible_id' => $responsibleId] + $data)
            ->save();
    }

    /**
     * @throws CnpjMustHaveTwelveDigitsException
     */
    public function update(int $responsibleId, array $data, int $companyId): CompanyDomain
    {
        $domain = new CompanyDomain(new CompanyRepository());

        return $domain
            ->fromArray($data + ['responsible_id' => $responsibleId])
            ->setId($companyId)
            ->update();
    }

    /**
     * @throws CnpjMustHaveTwelveDigitsException
     */
    public function show(int $companyId): CompanyDomain
    {
        $domain = new CompanyDomain(new CompanyRepository());

        return $domain->load($companyId);
    }
}
