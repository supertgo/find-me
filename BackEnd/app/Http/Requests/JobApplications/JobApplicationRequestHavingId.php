<?php

namespace App\Http\Requests\JobApplications;

use App\Exceptions\JobApplications\JobApplicationIdMustBeAnIntegerException;
use App\Http\Requests\AbstractRequest;

class JobApplicationRequestHavingId extends AbstractRequest
{
    /**
     * @throws JobApplicationIdMustBeAnIntegerException
     */
    public function getJobApplicationId(): int
    {
        $jobId = $this->route('application');

        if (!is_numeric($jobId)) {
            throw new JobApplicationIdMustBeAnIntegerException($jobId);
        }

        return (int)$jobId;
    }
}
