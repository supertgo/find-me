<?php


use App\Domain\User\UserTypeEnum;

return [
    'name.required' => 'Name cannot be empty',
    'password.required' => 'Password cannot be empty',
    'password.min' => 'Password must contain at least 6 characters',
    'email.required' => 'Email cannot be empty',
    'email.email' => 'Invalid email',
    'email.unique' => 'Email is already in use',
    'email.exists' => 'User not registered',
    'phone.required' => 'Phone number cannot be empty',
    'phone.unique' => 'Phone number is already in use',
    'phone.numeric' => 'Phone number must contain only numbers',
    'phone.max' => 'Phone number must contain 12 numbers',
    'type.required' => 'Type cannot be empty',
    'type.string' => 'Type must be a string',
    'type.in' => 'Type must be one of the following: '
        . implode(',', array_column(UserTypeEnum::cases(), 'value')),
];
