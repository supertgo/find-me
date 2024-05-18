<?php

namespace App\Domain\Company;

interface CompanyRepositoryInterface
{
    public function exists(int $id);

    public function save(array $data): array;

    public function update(array $data);

    public function load(int $companyId);

    public function list();
}
