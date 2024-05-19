<?php

namespace App\Domain\Resume;

class ResumeService implements ResumeServiceInterface
{
    public function create(array $data, int $ownerId): ResumeDomainInterface
    {
        return new ResumeDomain(new ResumeRepository());
    }

}
