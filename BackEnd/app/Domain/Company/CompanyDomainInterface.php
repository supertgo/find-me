<?php

namespace App\Domain\Company;

interface CompanyDomainInterface
{
    public function exists(int $id): bool;
}