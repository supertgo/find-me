<?php

namespace app\domain\user;

use App\Prototype\RegisterRequestPrototype;

interface UserRepositoryInterface
{
    public function createUser(RegisterRequestPrototype $prototype): void;
    public function forgotPassword(UserDomain $user): void;
}