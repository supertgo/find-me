<?php

namespace App\Http\Requests\UserCompetence;

use App\Http\Requests\AbstractRequest;
use App\Http\Requests\Rules\UniqueArrayValuesRule;

class DeleteCompetencesRequest extends AbstractRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'competencesId' => [
                'required',
                'array',
                'min:1',
                new UniqueArrayValuesRule,
            ],
            'competencesId.*' => 'required|integer',
        ];
    }
}
