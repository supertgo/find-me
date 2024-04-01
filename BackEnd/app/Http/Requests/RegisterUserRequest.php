<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'password' => 'required|min:6|string',
            'email' => 'required|email|unique:users,email,' . $this->user,
            'phone' => 'required|numeric|unique:users,phone,' . $this->user,
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => trans('User.name.required'),
            'password.required' => trans('User.password.required'),
            'password.min' => trans('User.password.min'),
            'email.required' => trans('User.email.required'),
            'email.email' => trans('User.email.email'),
            'email.unique' => trans('User.email.unique'),
            'phone.required' => trans('User.phone.required'),
            'phone.unique' => trans('User.phone.unique'),
            'phone.numeric' => trans('User.phone.numeric'),
            'phone.max' => trans('User.phone.max'),
        ];
    }
}
