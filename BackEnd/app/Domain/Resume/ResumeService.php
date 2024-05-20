<?php

namespace App\Domain\Resume;

use App\Domain\Resume\File\FileResume;
use App\Domain\Resume\File\FileResumeInterface;
use App\Domain\User\UserDomain;
use App\Domain\User\UserRepository;
use App\Exceptions\Resume\OnlyOwnerCanPatchResumeAliasException;
use App\Exceptions\Resume\ResumeNotFoundException;
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
     * @throws ResumeNotFoundException
     * @throws ResumeTypeNotAllowedException
     * @throws OnlyOwnerCanPatchResumeAliasException
     */
    public function patchAlias(int $resumeId, int $ownerId, string $alias): ResumeDomainInterface
    {
        $owner = (new UserDomain(new UserRepository()))->loadUser($ownerId);

        return (new FileResume(new ResumeRepository()))
            ->load($resumeId)
            ->updateAlias($owner->getId(), $alias);
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
