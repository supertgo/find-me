<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'password' => 'required|min:6|string',
            'email' => 'required|email|exists:users,email',
        ];
    }

    public function messages(): array
    {
        return [
            'password.required' => trans('User.password.required'),
            'password.min' => trans('User.password.min'),
            'email.required' => trans('User.email.required'),
            'email.email' => trans('User.email.email'),
            'email.exists' => trans('User.email.exists'),
        ];
    }
}
