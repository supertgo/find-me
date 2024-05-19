<?php

namespace App\Domain\Resume;

use App\Domain\Resume\File\FileResume;
use App\Domain\Resume\File\FileResumeInterface;
use App\Helpers\DataTransaction\DataTransactionServiceInterface;
use Exception;

class ResumeService implements ResumeServiceInterface
{
    /**
     * @throws Exception
     */
    public function create(array $data, int $ownerId): ResumeDomainInterface
    {
        $transaction = app(DataTransactionServiceInterface::class);
        $transaction->begin();
        try {
            $resume = match ($data['type']) {
                ResumeTypeEnum::File->value => $this->createFileResume($data, $ownerId),
            };
            $transaction->commit();

            return $resume;
        } catch (Exception $exception) {
            $transaction->rollback();

            throw $exception;
        }

    }

    private function createFileResume(array $data, int $ownerId): FileResumeInterface
    {
        $resume = new FileResume(new ResumeRepository());

        $resume
            ->fromArray(['owner_id' => $ownerId] + $data)
            ->store;

        return $resume;
    }

}
