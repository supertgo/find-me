<?php

namespace App\Domain\User;

use App\Prototype\RegisterRequestPrototype;

interface UserRepositoryInterface
{
    public function createUser(array $user): void;
    public function forgotPassword(UserDomain $user): void;
    public function getUsers(): array;

    public function exists(int $id): bool;

    public function getUser(int $id): array;

    public function isEmailAvailableToUpdate(UserDomainInterface $user): bool;

    public function isPhoneAvailable(UserDomainInterface $user): bool;

    public function update(UserDomainInterface $user): void;
}
