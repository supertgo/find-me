<?php

namespace App\Http\Requests\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;

class JobApplicationUpdateStatusRequest extends JobApplicationRequestHavingId
{
    public function rules(): array
    {
        return [
            'status' => 'required|string:in:' . JobApplicationsStatusEnum::getValuesAsString(),
        ];
    }

    public function getStatus(): string
    {
        return $this->post('status');
    }
}
