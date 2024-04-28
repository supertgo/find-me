<?php

namespace App\Domain\User;

use App\Domain\Abstract\AbstractRepository;
use App\Mail\UserForgotPassword;
use App\Models\User;
use App\Prototype\RegisterRequestPrototype;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;
use Mail;

class UserRepository extends AbstractRepository implements UserRepositoryInterface
{
    public function createUser(array $user): void
    {
        $user['password'] = Hash::make($user['password']);

        User::create($user);
    }

    public function isEmailAvailableToUpdate(UserDomainInterface $user): bool
    {
        return User::where('id', "!=", $user->getId())
            ->where('email', $user->getEmail())
            ->doesntExist();
    }

    public function isPhoneAvailable(UserDomainInterface $user): bool
    {
        return User::where('id', '!=', $user->getId())
            ->where('phone', $user->getPhone())
            ->doesntExist();
    }

    public function update(UserDomainInterface $user): void
    {
        User::where('id', $user->getId())
            ->update($user->toArray());
    }

    public function forgotPassword(UserDomain $user): void
    {
        Mail::send(new UserForgotPassword($user));
    }

    public function getUsers(): array
    {
        return User::all()->toArray();
    }

    public function exists(int $id): bool
    {
        return User::where('id', $id)->exists();
    }

    public function getUser(int $id): array
    {
        return User::find($id)->toArray();
    }
}
