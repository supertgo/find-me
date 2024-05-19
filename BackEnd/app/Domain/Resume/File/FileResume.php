<?php

namespace App\Domain\Resume\File;


use App\Domain\Resume\ResumeDomain;
use App\Exceptions\Resume\ResumeTypeNotAllowedException;
use App\Helpers\File\FileHelperInterface;
use Illuminate\Http\UploadedFile;

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

    public function fromArray(array $data): static
    {
        parent::fromArray($data);

        $this->setFilePath($data['file_path'] ?? null);

        return $this;
    }

    /**
     * @throws ResumeTypeNotAllowedException
     */
    public function save(UploadedFile $resumeFile): static
    {
        $fileHelper = app(FileHelperInterface::class);

        $path = $fileHelper->storeRandomInPrivateDirectory($resumeFile);

        $data = $this->setFilePath($path)
            ->repository
            ->save($this->toArray());

        return (new FileResume($this->repository))
            ->fromArray($data);
    }

}
