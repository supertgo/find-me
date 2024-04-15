<?php

namespace App\Domain\User;

class UserDomain
{
    public function __construct(private UserRepositoryInterface $userRepository)
    {
    }

    public function users(): array
    {
        return $this->userRepository->getUsers();
    }

    private ?int $id;
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

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): UserDomain
    {
        $this->id = $id;
        return $this;
    }

}