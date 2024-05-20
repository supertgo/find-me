<?php

namespace App\Http\Requests\Resume;

use App\Exceptions\Resume\ResumeIdMustBeAnIntegerException;
use App\Exceptions\Resume\ResumeIdMustBePositiveException;
use App\Http\Requests\AbstractRequest;

class ResumeRequestHavingId extends AbstractRequest
{
    /**
     * @throws ResumeIdMustBeAnIntegerException
     * @throws ResumeIdMustBePositiveException
     */
    public function getJobId(): int
    {
        $jobId = $this->route('resume');

        if (!is_int($jobId)) {
            throw new ResumeIdMustBeAnIntegerException($jobId);
        }

        if ($jobId <= 0) {
            throw new ResumeIdMustBePositiveException($jobId);
        }

        return $jobId;
    }
}
