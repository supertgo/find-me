<?php

namespace App\Domain\User;


use App\Exceptions\User\UserNotFoundException;

readonly class UserService
{
    public function createUser(array $user): void
    {
        (new UserDomain(app(UserRepository::class)))
            ->fromArray($user)
            ->createUser();
    }

    /**
     * @throws UserNotFoundException
     */
    public function getUser(int $userId): array
    {
        $repository = app(UserRepository::class);

        $userDomain = new UserDomain($repository);
        $userDomain->setId($userId);

        if (!$userDomain->exists()) {
            throw new UserNotFoundException($userId);
        }

        return $userDomain
            ->loadUser($userId)
            ->toArray();
    }
}
