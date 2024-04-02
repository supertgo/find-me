<?php

namespace App\Domain\User;


use App\Prototype\RegisterRequestPrototype;

readonly class UserService
{
    public function __construct(private UserRepositoryInterface $userRepository)
    {
    }

    public function createUser(RegisterRequestPrototype $prototype): void
    {
        $this->userRepository->createUser($prototype);
    }

    public function forgotPassword(): void
    {
        $domain = new UserDomain();
        $this->userRepository->forgotPassword($domain);
    }

}
