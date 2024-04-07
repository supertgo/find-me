<?php

namespace App\Http\Requests;

use App\Domain\Job\EmploymentTypeEnum;
use App\Domain\Job\SalaryTimeUnitEnum;
use App\Domain\Job\WorkModelEnum;
use Auth;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Http\FormRequest;

class AbstractRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function getLoggedUser(): Authenticatable
    {
       return Auth::User();
    }
    public function getLoggedUserId(): int
    {
        return Auth::id();
    }
   
    public function messages(): array
    {
        return [
        ];
    }
}
