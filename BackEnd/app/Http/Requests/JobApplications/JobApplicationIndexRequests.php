<?php

namespace App\Http\Requests\JobApplications;

use App\Domain\Job\Enum\JobIncludesEnum;
use App\Http\Requests\AbstractRequest;

class JobApplicationIndexRequests extends AbstractRequest
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
        ];
    }
}
