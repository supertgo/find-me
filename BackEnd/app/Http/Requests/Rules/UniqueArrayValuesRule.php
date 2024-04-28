<?php

namespace App\Http\Requests\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UniqueArrayValuesRule implements ValidationRule
{
    public function passes($attribute, $value): bool
    {
        return count($value) === count(array_unique($value));
    }

    public function message(): string
    {
        return 'The :attribute must contain unique values.';
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!$this->passes($attribute, $value)) {
            $fail($this->message());
        }
    }
}