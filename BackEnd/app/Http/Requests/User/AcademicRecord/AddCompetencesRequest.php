<?php

namespace App\Http\Requests\User\AcademicRecord;

use App\Http\Requests\AbstractRequest;

class AddCompetencesRequest extends AbstractRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'competences' => 'required|array|min:1',
            'competences.*.name' => 'required|string',
            'competences.*.description' => 'string',
        ];
    }
}
