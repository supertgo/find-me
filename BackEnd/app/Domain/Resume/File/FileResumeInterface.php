<?php

namespace App\Domain\Resume\File;

use App\Domain\Resume\ResumeDomainInterface;

interface FileResumeInterface extends ResumeDomainInterface
{
    function getFilePath(): ?string;

    function setFilePath(?string $filePath): FileResumeInterface;
}
