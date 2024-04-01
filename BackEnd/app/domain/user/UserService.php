<?php

namespace app\domain\user;


use App\Prototype\RegisterRequestPrototype;

class UserService
{
    public function __construct(private readonly UserRepositoryInterface $userRepository)
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
