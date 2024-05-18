<?php

namespace App\Http\Requests\Company;

use App\Exceptions\Job\JobIdMustBeAnIntegerException;

trait RouteHavingCompanyTrait
{
    /**
     * @throws JobIdMustBeAnIntegerException
     */
    public function getCompanyId(): int
    {
        $jobId = $this->route('company');

        if (!is_numeric($jobId)) {
            throw new JobIdMustBeAnIntegerException($jobId);
        }

        return (int)$jobId;
    }
}
