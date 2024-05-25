<?php

namespace App\Http\Requests\Job;

use App\Domain\Job\Enum\EmploymentTypeEnum;
use App\Domain\Job\Enum\JobIncludesEnum;
use App\Domain\Job\Enum\SalaryTimeUnitEnum;
use App\Domain\Job\Enum\WorkModelEnum;
use App\Http\Requests\AbstractRequest;
use App\Http\Requests\Rules\UniqueArrayValuesRule;

class IndexJobRequest extends AbstractRequest
{
    protected array $availableIncludes = [
        JobIncludesEnum::Company->value,
        JobIncludesEnum::Competences->value,
    ];

    public function rules(): array
    {
        return [
            'includes' => 'array',
            'includes.*' => 'string|in:' . implode(',', $this->availableIncludes),

            'filters' => 'array',
            'filters.name' => 'string',
            'filters.description' => 'string',
            'filters.is_available' => 'boolean',

            'filters.salary_from' => 'integer',
            'filters.salary_to' => 'integer',
            'filters.salary_time_units' => 'array',
            'filters.salary_time_units.*' => 'string|in' . SalaryTimeUnitEnum::valuesAsString(),

            'filters.accept_application_until' => 'date|date_format:Y-m-d H:i:s',

            'filters.work_models' => 'array',
            'filters.work_models.*' => 'string.in' . WorkModelEnum::valuesAsString(),

            'filters.employment_types' => 'array',
            'filters.employment_types.*' => 'string|in:' . EmploymentTypeEnum::valuesAsString(),

            'filters.week_workload_from' => 'integer',
            'filters.week_workload_to' => 'integer',

            'filters.location' => 'string',

            'filters.company_ids' => 'array',
            'filters.company_ids.*' => 'integer',

            'filters.competence_ids' => ['array', UniqueArrayValuesRule::class],
            'filters.competence_ids.*' => 'integer',
        ];
    }
}
