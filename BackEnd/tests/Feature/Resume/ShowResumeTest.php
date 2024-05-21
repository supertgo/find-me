<?php

namespace Tests\Feature\Resume;

use App\Models\Resume;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ShowResumeTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'user/resume/%s';

    public function testShowResume()
    {
        $this->makeEmployee();

        $resume = Resume::factory()->create([
            'owner_id' => $this->employee->id
        ]);

        $this
            ->actingAs($this->employee)
            ->get(sprintf(self::ROUTE, $resume->id))
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
                    'alias' => $resume->alias,
                    'type' => $resume->type,
                    'owner_id' => $this->employee->id,
                ]
            ]);
    }
}
