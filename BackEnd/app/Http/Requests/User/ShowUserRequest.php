<?php

namespace App\Http\Requests\User;

use App\Domain\User\UserIncludesEnum;

class ShowUserRequest extends UserRequestHavingId
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
