<?php

namespace App\Domain\Resume\File;

use App\Domain\Resume\ResumeDomainInterface;
use Illuminate\Http\UploadedFile;

interface FileResumeInterface extends ResumeDomainInterface
{
    function getFilePath(): ?string;

    function setFilePath(?string $filePath): FileResumeInterface;

    function save(UploadedFile $resumeFile): static;
}
