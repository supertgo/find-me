<?php

namespace App\Http\Requests\Job;

use App\Domain\Job\Enum\JobIncludesEnum;

class ShowJobRequest extends JobRequestHavingId
{
    protected array $availableIncludes = [
        JobIncludesEnum::Company->value
    ];

    public function rules(): array
    {
        return [
            'includes' => 'array',
            'includes.*' => 'string|in:' . implode(',', $this->availableIncludes),
        ];
    }
}
