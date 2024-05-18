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
}
