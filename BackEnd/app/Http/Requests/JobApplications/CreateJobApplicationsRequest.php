<?php

namespace App\Http\Requests\JobApplications;

use App\Http\Requests\Job\JobRequestHavingId;

class CreateJobApplicationsRequest extends JobRequestHavingId
{
    public function rules(): array
    {
        return [
            'cover_letter' => 'string'
        ];
    }
}
