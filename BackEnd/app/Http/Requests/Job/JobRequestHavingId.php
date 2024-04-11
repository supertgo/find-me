<?php

namespace App\Http\Requests\Job;

use App\Exceptions\Job\JobIdMustBeAnIntegerException;
use App\Http\Requests\AbstractRequest;

class JobRequestHavingId extends AbstractRequest
{
    /**
     * @throws JobIdMustBeAnIntegerException
     */
    public function getJobId(): int
    {
        $jobId = $this->route('job');

        if(!is_numeric($jobId)){
            throw new JobIdMustBeAnIntegerException($jobId);
        }

        return (int) $jobId;
    }
}
