<?php

namespace App\Domain\Resume;


use Illuminate\Http\UploadedFile;

interface ResumeServiceInterface
{
    function create(array $data, int $ownerId, UploadedFile $resume): ResumeDomainInterface;

    function patchAlias(int $resumeId, int $solicitorId, string $alias): ResumeDomainInterface;

    function getFilePath(int $resumeId, int $solicitorId): string;
}
