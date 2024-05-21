<?php

namespace App\Http\Requests\Resume;

class PatchResumeStatusRequest extends ResumeRequestHavingId
{
    public function rules(): array
    {
        return [
            'alias' => 'required|string',
        ];
    }

    public function getAlias(): string
    {
        return $this->input('alias');
    }
}
