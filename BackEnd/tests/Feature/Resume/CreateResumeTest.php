<?php

namespace Tests\Feature\Resume;

use App\Domain\Resume\ResumeTypeEnum;
use App\Models\Resume;
use Illuminate\Http\UploadedFile;
use Storage;
use Str;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class CreateResumeTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'user/resume';

    public function testCreateWithFile()
    {
        Storage::fake('local');
        $payload = $this->getPayload();

        $this->makeEmployee();
        $response = $this
            ->actingAs($this->employee)
            ->post(self::ROUTE, $payload)
            ->assertStatus(Response::HTTP_CREATED)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'alias',
                    'type',
                    'owner_id',
                    'created_at',
                    'updated_at',
                ]
            ])
            ->assertJson([
                'data' => [
                    'alias' => $payload['alias'],
                    'type' => ResumeTypeEnum::File->value,
                    'owner_id' => $this->employee->id,
                ]
            ]);

        $resumeID = $response->json('data.id');

        $this->assertDatabaseHas('resumes', [
            'id' => $resumeID,
            'alias' => $payload['alias'],
            'type' => ResumeTypeEnum::File->value,
            'owner_id' => $this->employee->id,
        ]);

        $resume = Resume::find($resumeID);

        $this->assertNotNull($resume->file_path);

        $explodedUrl = explode('/', $resume->file_path);
        $this->assertTrue(
            Storage::disk('local')
                ->exists(end($explodedUrl))
        );
    }

    private function getPayload(): array
    {
        return [
            'alias' => Str::random(),
            'type' => ResumeTypeEnum::File->value,
            'resume_file' => UploadedFile::fake()
                ->create('profile_picture.jpg', 100, 'application/pdf')
        ];
    }
}
