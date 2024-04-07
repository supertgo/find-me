<?php

namespace App\Http\Requests;

use App\Domain\Job\EmploymentTypeEnum;
use App\Domain\Job\SalaryTimeUnitEnum;
use App\Domain\Job\WorkModelEnum;
use Illuminate\Foundation\Http\FormRequest;

class StoreJobRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'is_available' => 'required|boolean',
            'applications_amount' => 'required|integer|min:0',
            'salary' => 'nullable|integer|min:0',
            'salary_time_unit' =>
                'required_with:salary|in' . implode(',', array_column(SalaryTimeUnitEnum::cases(), 'value')),
            'accept_application_until' => 'nullable|datetime',
            'work_model' =>
                'nullable|in' . implode(',', array_column(WorkModelEnum::cases(), 'value')),
            'employment_type' =>
                'nullable|in' . implode(',', array_column(EmploymentTypeEnum::cases(), 'value')),
            'week_workload' => 'nullable|integer|min:0',
            'location' => 'nullable|string',
            'owner' => 'required|exists:users,id',
        ];
    }

    public function messages(): array
    {
        return [
        ];
    }
}
