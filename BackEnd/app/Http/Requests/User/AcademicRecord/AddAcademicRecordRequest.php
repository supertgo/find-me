<?php

namespace App\Http\Requests\User\AcademicRecord;

use App\Http\Requests\AbstractRequest;

class AddAcademicRecordRequest extends AbstractRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'academic_records' => 'required|array|min:1',
            'academic_records.*.institution' => 'required|string',
            'academic_records.*.degree' => 'required|string',
            'academic_records.*.field_of_study' => 'required|string',
            'academic_records.*.start_date' => 'required|date|date_format:Y-m-d',
            'academic_records.*.end_date' => 'date|date_format:Y-m-d',
            'academic_records.*.is_on_progress' => 'required|boolean',
            'academic_records.*.description' => 'string',
        ];
    }
}
