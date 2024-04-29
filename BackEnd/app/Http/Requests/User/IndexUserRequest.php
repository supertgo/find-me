<?php

namespace App\Http\Requests\User;

use App\Domain\User\UserIncludesEnum;
use App\Http\Requests\AbstractRequest;

class IndexUserRequest extends AbstractRequest
{
    protected array $availableIncludes = [UserIncludesEnum::Competences->value];

    public function rules(): array
    {
        return [
            'includes' => 'array',
            'includes.*' => 'string|in:' . implode(',', $this->availableIncludes),
        ];
    }
}
