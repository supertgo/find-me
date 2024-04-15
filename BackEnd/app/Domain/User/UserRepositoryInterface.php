<?php

namespace App\Domain\User;

use App\Prototype\RegisterRequestPrototype;

interface UserRepositoryInterface
{
    public function createUser(RegisterRequestPrototype $prototype): void;
    public function forgotPassword(UserDomain $user): void;
    public function getUsers(): array;
}