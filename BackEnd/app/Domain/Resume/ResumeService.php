<?php

namespace App\Domain\Resume;

use App\Domain\Resume\File\FileResume;
use App\Domain\Resume\File\FileResumeInterface;
use App\Exceptions\Resume\ResumeTypeNotAllowedException;
use App\Helpers\DataTransaction\DataTransactionServiceInterface;
use Exception;
use Illuminate\Http\UploadedFile;

class ResumeService implements ResumeServiceInterface
{
    /**
     * @throws Exception
     */
    public function create(array $data, int $ownerId, UploadedFile $resume): ResumeDomainInterface
    {
        $transaction = app(DataTransactionServiceInterface::class);
        $transaction->begin();
        try {
            $resume = match ($data['type']) {
                ResumeTypeEnum::File->value => $this->createFileResume($data, $ownerId, $resume),
            };

            $transaction->commit();

            return $resume;
        } catch (Exception $exception) {
            $transaction->rollback();

            throw $exception;
        }

    }

    /**
     * @throws ResumeTypeNotAllowedException
     */
    private function createFileResume(array $data, int $ownerId, UploadedFile $resumeFile): FileResumeInterface
    {
        $resume = new FileResume(new ResumeRepository());

        return $resume
            ->fromArray(['owner_id' => $ownerId] + $data)
            ->save($resumeFile);
    }

}
