<?php

namespace App\Http\Requests\Resume;

use App\Domain\Resume\ResumeDomain;
use App\Domain\Resume\ResumeTypeEnum;
use App\Http\Requests\AbstractRequest;

class CreateResumeRequest extends AbstractRequest
{
    public function rules(): array
    {
        return [
            'alias' => 'required|string',
            'type' => 'required|string|in:' . ResumeTypeEnum::valuesAsString(),
            'file' => [
                'requiredIf:type,' . ResumeTypeEnum::File->value,
                'file',
                'mimes:pdf',
                'max:' . ResumeDomain::MAX_FILE_SIZE,
            ],
        ];
    }
}
