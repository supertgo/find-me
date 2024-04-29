<?php

namespace App\Http\Requests\User\AcademicRecord;

use App\Http\Requests\AbstractRequest;
use App\Http\Requests\Rules\UniqueArrayValuesRule;

class DeleteAcademicRecordsRequest extends AbstractRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'academicRecordsId' => [
                'required',
                'array',
                'min:1',
                new UniqueArrayValuesRule,
            ],
            'academicRecordsId.*' => 'required|integer',
        ];
    }
}
