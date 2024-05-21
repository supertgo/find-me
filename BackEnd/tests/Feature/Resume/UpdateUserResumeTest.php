<?php

namespace Tests\Feature\Resume;

use App\Domain\Resume\ResumeTypeEnum;
use App\Models\Resume;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Storage;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class
UpdateUserResumeTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/resume/%s/file';

    public function testUpdateResumeFile()
    {
        Storage::fake('public');

        $this->makeEmployee();

        $resume = Resume::factory()->create([
            'owner_id' => $this->employee->id,
            'type' => ResumeTypeEnum::File->value,
            'file_path' => 'test'
        ]);
        $payload = $this->getPayload();

        $this
            ->actingAs($this->employee)
            ->json(
                'PATCH',
                sprintf(self::ROUTE, $resume->id),
                $payload
            )
            ->assertStatus(Response::HTTP_NO_CONTENT);

        $resume->refresh();

        $this->assertNotEquals('test', $resume->file_path);

        $explodedUrl = explode('/', $resume->file_path);
        $this->assertTrue(
            Storage::disk('local')
                ->exists(end($explodedUrl))
        );
    }

    private function getPayload(): array
    {
        return [
            'resume_file' =>
                UploadedFile::fake()->create('profile_picture.jpg', 100, 'application/pdf')
        ];
    }
}
