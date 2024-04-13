<?php

namespace App\Domain\User;

class UserDomain
{
    private string $name;
    private string $email;
    private string $phone;
    private SalaryTimeUnitEnum $type;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): JobDomain
    {
        $this->name = $name;
        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): JobDomain
    {
        $this->email = $email;
        return $this;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): JobDomain
    {
        $this->phone = $phone;
        return $this;
    }

    public function getType(): SalaryTimeUnitEnum
    {
        return $this->type;
    }

    public function setType(SalaryTimeUnitEnum $type): JobDomain
    {
        $this->type = $type;
        return $this;
    }

}