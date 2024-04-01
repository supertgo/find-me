<?php

namespace App\Domain\User;

use App\Domain\Abstract\AbstractRepository;
use App\Mail\UserForgotPassword;
use App\Models\User;
use App\Prototype\RegisterRequestPrototype;
use Illuminate\Support\Facades\Hash;
use Mail;

class UserRepository extends AbstractRepository implements UserRepositoryInterface
{
    public function createUser(RegisterRequestPrototype $prototype): void
    {
        User::create([
            'name' => $prototype->getName(),
            'email' => $prototype->getEmail(),
            'phone' => $prototype->getPhone(),
            'password' => Hash::make($prototype->getPassword())
        ]);
    }

    public function forgotPassword(UserDomain $user): void
    {
        Mail::send(new UserForgotPassword($user));
    }

}
