<?php

namespace Tests\Feature\Resume;

use App\Models\Resume;
use Illuminate\Http\UploadedFile;
use Storage;
use Str;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class DownloadResumeFileTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'user/resume/%s/download';

    public function testCreateWithFile()
    {
        Storage::fake('local');
        $file = UploadedFile::fake()
            ->create('profile_picture.jpg', 100, 'application/pdf');

        $path = Str::random();
        $file->move(Storage::disk('local')->path(''), $path);

        $this->makeEmployee();

        $resume = Resume::factory()->create([
            'owner_id' => $this->employee->id,
            'file_path' => $path,
        ]);

        $this
            ->actingAs($this->employee)
            ->get(sprintf(self::ROUTE, $resume->id))
            ->assertStatus(Response::HTTP_OK)
            ->assertDownload();
    }
}
