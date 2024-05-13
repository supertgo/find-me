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

            'filters.jobs_id' => ['array', new UniqueArrayValuesRule],
            'filters.jobs_id.*' => 'integer',

            'filters.candidates_id' => ['array', new UniqueArrayValuesRule],
            'filters.candidates_id.*' => 'integer',

            'filters.statuses' => ['array', new UniqueArrayValuesRule],
            'filters.statuses.*' => 'string:in:' . JobApplicationsStatusEnum::getValuesAsString(),

            'filters.date_time_from' => ['date', 'date_format:Y-m-d H:i:s'],
            'filters.date_time_to' => ['date', 'date_format:Y-m-d H:i:s'],
        ];
    }
}
