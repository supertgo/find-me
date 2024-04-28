<?php

namespace App\Domain\User;


use App\Domain\Abstract\AbstractRepository;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\User\UserNotFoundException;
use Exception;
use Illuminate\Support\Facades\Log;
use Throwable;

readonly class UserService
{
    public function createUser(array $user): void
    {
        (new UserDomain(app(UserRepository::class)))
            ->fromArray($user)
            ->createUser();
    }

    /**
     * @throws Throwable
     * @throws AbstractDomainException
     */
    public function update(array $user): array
    {
        $repository = app(UserRepository::class);

        try {
            return (new UserDomain($repository))
                ->fromArray($user)
                ->update()
                ->toArray();

        } catch (Exception $exception) {
            $this->commonLogLogic($repository, $exception);

            throw $exception;
        }
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

    /**
     * @throws Throwable
     */
    public function commonLogLogic(AbstractRepository $repository, Exception $exception): void
    {
        $repository->rollbackTransaction();

        Log::error($exception);
    }
}
