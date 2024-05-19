<?php

namespace App\Domain\Resume\File;


use App\Domain\Resume\ResumeDomain;

class FileResume extends ResumeDomain implements FileResumeInterface
{
    private ?string $filePath;

    public function getFilePath(): ?string
    {
        return $this->filePath;
    }

    public function setFilePath(?string $filePath): FileResume
    {
        $this->filePath = $filePath;

        return $this;
    }
}
