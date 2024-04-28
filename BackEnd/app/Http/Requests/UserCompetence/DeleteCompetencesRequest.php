<?php

namespace App\Http\Requests\UserCompetence;

use App\Http\Requests\AbstractRequest;

class DeleteCompetencesRequest extends AbstractRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'competences' => 'required|array|min:1',
            'competences.*.id' => 'required|integer|unique',
        ];
    }
}
