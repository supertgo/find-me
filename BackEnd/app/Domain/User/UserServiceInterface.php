<?php

namespace App\Domain\User;

use Illuminate\Http\UploadedFile;

interface UserServiceInterface
{

    function createUser(array $user): int;

    function update(array $user): array;

    function getUser(int $userId, array $includes): array;

    function addCompetencesToUser(int $userId, array $competences): void;

    function removeCompetences(int $userId, array $competencesId): void;

    function addAcademicRecords(int $userId, array $records): void;

    function removeAcademicRecords(int $userId, array $academicRecordsId): void;

    function removeProfessionalExperiences(int $userId, array $experiences): void;

    function addProfessionalExperiences(int $userId, array $experiences): void;

    function setProfilePicture(UploadedFile $file, int $userId): void;

    function updateProfilePicture(int $userId, UploadedFile $profilePicture): string;

    function deleteProfilePicture(int $userId): void;
}
