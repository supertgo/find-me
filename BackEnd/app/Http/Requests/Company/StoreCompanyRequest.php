<?php

namespace App\Http\Requests\Company;

use App\Http\Requests\AbstractRequest;

class StoreCompanyRequest extends AbstractRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'cnpj' => 'required|integer',
            'fantasy_name' => 'string',
            'location' => 'string',
        ];
    }
}
