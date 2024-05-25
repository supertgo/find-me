<?php

namespace App\Http\Requests\User;

use App\Domain\User\UserIncludesEnum;
use App\Domain\User\UserTypeEnum;
use App\Http\Requests\AbstractRequest;
use App\Http\Requests\Rules\UniqueArrayValuesRule;

class IndexUserRequest extends AbstractRequest
{
    protected array $availableIncludes = [UserIncludesEnum::Competences->value];

    public function rules(): array
    {
        return [
            'includes' => 'array',
            'includes.*' => 'string|in:' . implode(',', $this->availableIncludes),

            'filters' => 'array',
            'filters.name' => 'string',
            'filters.email' => 'email',
            'filters.type' => 'string|in:' . UserTypeEnum::valuesAsString(),

            'filters.competences_id' => ['array', new UniqueArrayValuesRule],
            'filters.competences_id.*' => 'integer',
        ];
    }
}
