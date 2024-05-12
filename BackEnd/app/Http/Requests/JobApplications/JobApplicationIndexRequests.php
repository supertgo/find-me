<?php

namespace App\Http\Requests\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsIncludesEnum;
use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Http\Requests\AbstractRequest;
use App\Http\Requests\Rules\UniqueArrayValuesRule;

class JobApplicationIndexRequests extends AbstractRequest
{
    protected array $availableIncludes = [
        JobApplicationsIncludesEnum::Job->value,
        JobApplicationsIncludesEnum::Candidates->value,
    ];

    public function rules(): array
    {
        return [
            'includes' => ['array', new UniqueArrayValuesRule],
            'includes.*' => 'string',
            'filters' => 'array',

            'filters.jobsId' => ['array', new UniqueArrayValuesRule],
            'filters.jobsId.*.' => 'integer',

            'filters.candidatesId' => ['array', new UniqueArrayValuesRule],
            'filters.candidatesId.*.' => 'integer',

            'filters.statuses' => ['array', new UniqueArrayValuesRule],
            'filters.statuses.*.' => 'string:in:' . JobApplicationsStatusEnum::getValuesAsString(),

            'filters.dateTimeFrom' => ['date', 'date_format:Y-m-d H:i:s'],
            'filters.dateTimeTo' => ['date', 'date_format:Y-m-d H:i:s'],
        ];
    }
}
