<?php

namespace App\Domain\Company;

interface CompanyRepositoryInterface
{
    public function exists(int $id);

    public function save(array $data): array;
}
