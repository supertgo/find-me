<?php

namespace App\Domain\Resume;

class ResumeService implements ResumeServiceInterface
{
    public function create(): ResumeDomainInterface
    {
        return new ResumeDomain(new ResumeRepository());
    }

}
