<?php

namespace Tests\Unit\Domain;

use App\Domain\User\UserDomain;
use App\Domain\User\UserDomainInterface;
use App\Domain\User\UserFilterInterface;
use App\Domain\User\UserRepositoryInterface;
use App\Domain\User\UserTypeEnum;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;

class UserTestRepository implements UserRepositoryInterface
{

    const UPDATED_USER_NAME = 'Updated User';

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
            'name' => 'User ' . $id,
            'email' => 'user' . $id . '@example.com',
            'phone' => '123456789',
            'password' => 'password',
            'type' => UserTypeEnum::Recruiter->value,
        ];
    }

    public function isEmailAvailableToUpdate(UserDomainInterface $user): bool
    {
        $emailFirstCharacter = substr($user->getEmail(), 0, 1);

        return !is_numeric($emailFirstCharacter);
    }

    public function isPhoneAvailable(UserDomainInterface $user): bool
    {
        $phoneFirstCharacter = substr($user->getPhone(), 0, 1);

        return $phoneFirstCharacter % 2;
    }

    public function update(UserDomainInterface $user): void
    {
        $user->setName(self::UPDATED_USER_NAME);
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
