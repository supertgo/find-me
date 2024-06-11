<?php

namespace Tests\Unit\Domain;

use App\Domain\User\UserDomain;
use App\Domain\User\UserDomainInterface;
use App\Domain\User\UserFilterInterface;
use App\Domain\User\UserRepositoryInterface;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;

class UserTestRepository implements UserRepositoryInterface
{
    public function createUser(array $user): array
    {
        return $user;
    }

    public function forgotPassword(UserDomain $user): void
    {
        // TODO: Implement forgotPassword() method.
    }

    public function getUsers(): array
    {
        return [];
    }

    public function exists(int $id): bool
    {
        return $id % 2;
    }

    public function getUser(int $id): array
    {
        return [
            'id' => $id,
        ];
    }

    public function isEmailAvailableToUpdate(UserDomainInterface $user): bool
    {
        return true;
    }

    public function isPhoneAvailable(UserDomainInterface $user): bool
    {
        return true;
    }

    public function update(UserDomainInterface $user): void
    {
        // TODO: Implement update() method.
    }

    public function attachCompetences(int $id, Collection $competences): void
    {
        // TODO: Implement attachCompetences() method.
    }

    public function removeCompetence(int $id, int $competenceId): void
    {
        // TODO: Implement removeCompetence() method.
    }

    public function userHasCompetence(int $id, int $competenceId): bool
    {
        return $id % 2;
    }

    public function getUserWithIncludes(int $userId, array $includes): array
    {
        return [];
    }

    public function getUsersWithIncludes(array $includes): array
    {
        return [];
    }

    public function createProfilePicture(UploadedFile $file, int $userId): string
    {
        return '';
    }

    public function deleteProfilePicture(string $profilePicturePath, int $userId): void
    {
        // TODO: Implement deleteProfilePicture() method.
    }

    public function getWithFilters(UserFilterInterface $filters, array $includes): array
    {
        return [];
    }
}
