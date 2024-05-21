<?php

namespace App\Domain\Resume;

use App\Domain\Resume\File\FileResume;
use Exception;

class ResumeFactory
{
    /**
     * @throws Exception
     */
    public static function create(ResumeTypeEnum $type, ResumeRepositoryInterface $repository): ResumeDomainInterface
    {
        return match ($type) {
            ResumeTypeEnum::File => new FileResume($repository),
            ResumeTypeEnum::Form => throw new Exception('Not yet implemented.')
        };
    }
}
