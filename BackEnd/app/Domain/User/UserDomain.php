<?php

namespace App\Domain\User;

class UserDomain
{
    private string $name;
    private string $email;
    private string $phone;
    private UserTypeEnum $type;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): UserDomain
    {
        $this->name = $name;
        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): UserDomain
    {
        $this->email = $email;
        return $this;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): UserDomain
    {
        $this->phone = $phone;
        return $this;
    }

    public function getType(): UserTypeEnum
    {
        return $this->type;
    }

    public function setType(UserTypeEnum $type): UserDomain
    {
        $this->type = $type;
        return $this;
    }

}