<?php

namespace Tests\Feature\Resume;

use App\Domain\Resume\ResumeTypeEnum;
use App\Models\Resume;
use Str;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class PatchResumeAliasTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'user/resume/%s/alias';

    public function testCreateWithFile()
    {
        $this->makeEmployee();

        $resume = Resume::factory()->create([
            'owner_id' => $this->employee->id
        ]);

        $payload = [
            'alias' => Str::random(),
        ];

        $response = $this
            ->actingAs($this->employee)
            ->patch(
                sprintf(self::ROUTE, $resume->id),
                $payload
            )
            ->assertStatus(Response::HTTP_OK)
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
                    'id' => $resume->id,
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
    }
}
