<?php

namespace App\Domain\Resume;


use Illuminate\Http\UploadedFile;

interface ResumeServiceInterface
{
    function create(array $data, int $ownerId, UploadedFile $resume): ResumeDomainInterface;

    function updateAlias(int $resumeId, int $solicitorId, string $alias): ResumeDomainInterface;

    function getFilePath(int $resumeId, int $solicitorId): string;

    function updateFile(int $resumeId, int $solicitorId, UploadedFile $resume): ResumeDomainInterface;

    function get(int $resumeId, int $solicitorId): ResumeDomainInterface;

    function getUserResumes(int $userId): array;
}
