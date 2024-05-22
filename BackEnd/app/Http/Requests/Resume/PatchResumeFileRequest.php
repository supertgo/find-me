<?php

namespace App\Http\Requests\Resume;

use App\Domain\Resume\ResumeDomain;
use Illuminate\Http\UploadedFile;

class PatchResumeFileRequest extends ResumeRequestHavingId
{
    public function rules(): array
    {
        return [
            'resume_file' => [
                'required',
                'file',
                'mimes:pdf',
                'max:' . ResumeDomain::MAX_FILE_SIZE,
            ],
        ];
    }

    public function getFile(): UploadedFile
    {
        return $this->file('resume_file');
    }
}
