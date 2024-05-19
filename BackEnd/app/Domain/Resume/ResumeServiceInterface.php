<?php

namespace App\Domain\Resume;

interface ResumeServiceInterface
{
    function create(): ResumeDomainInterface;
}
