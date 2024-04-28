<?php

namespace App\Domain\User;


use App\Domain\Abstract\AbstractRepository;
use App\Domain\Competence\CompetenceDomain;
use App\Domain\Competence\CompetenceRepository;
use App\Exceptions\Abstract\AbstractDomainException;
use App\Exceptions\Competence\CompetenceNotFound;
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

    /**
     * @throws Throwable
     */
    public function addCompetencesToUser(int $userId, array $competences): void
    {
        $userRepository = new UserRepository();

        try {
            $userRepository->beginTransaction();

            $competenceDomain = new CompetenceDomain(new CompetenceRepository());

            $competences = $competenceDomain->createCompetencesIfNotExist($competences);

            (new UserDomain($userRepository))
                ->setId($userId)
                ->attachCompetences($competences);

            $userRepository->commitTransaction();
        } catch (Exception $exception) {
            $this->commonLogLogic($userRepository, $exception);

            throw $exception;
        }
    }

    /**
     * @throws Throwable
     */
    public function removeCompetences(int $userId, array $competences): void
    {
        $userRepository = new UserRepository();

        try {
            $userRepository->beginTransaction();
            $userDomain = new UserDomain($userRepository);
            $userDomain->setId($userId);

            $competenceRepository = new CompetenceRepository();

            foreach ($competences as $competence) {
                $competenceDomain = new CompetenceDomain($competenceRepository);
                if (!$competenceDomain->exists($competence['id'])) {
                    throw new CompetenceNotFound($competence['id']);
                }

                $userDomain->removeCompetence($competences);
            }

            $userRepository->commitTransaction();
        } catch (Exception $exception) {
            $this->commonLogLogic($userRepository, $exception);

            throw $exception;
        }
    }
}
