<?php

namespace App\Domain\Resume;

interface ResumeServiceInterface
{
    function create(array $data, int $ownerId): ResumeDomainInterface;
}
