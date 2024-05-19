<?php

namespace App\Domain\Resume;


use Illuminate\Http\UploadedFile;

interface ResumeServiceInterface
{
    function create(array $data, int $ownerId, UploadedFile $resume): ResumeDomainInterface;
}
