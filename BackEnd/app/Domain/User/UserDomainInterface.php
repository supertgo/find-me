<?php

namespace App\Domain\User;

interface UserDomainInterface
{
    public function fromArray(array $user): self;
    public function update(): self;
    public function createUser(): void;
    public function loadUser(int $userId): self;
    public function toArray(): array;
    public function exists(): bool;
    public function users(): array;
    public function getName(): string;
    public function setName(string $name): self;
    public function getEmail(): string;
    public function setEmail(string $email): self;
    public function getPhone(): string;
    public function setPhone(string $phone): self;
    public function getType(): UserTypeEnum;
    public function setType(UserTypeEnum $type): self;
    public function getId(): ?int;
    public function setId(?int $id): self;
    public function getRepository(): UserRepositoryInterface;
}
