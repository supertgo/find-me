<?php

namespace App\Http\Requests\Company;

use App\Http\Requests\AbstractRequest;

class ShowCompanyRequest extends AbstractRequest
{
    use RouteHavingCompanyTrait;
}
