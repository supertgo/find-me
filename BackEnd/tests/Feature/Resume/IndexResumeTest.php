<?php

namespace Tests\Feature\Resume;

use App\Models\Resume;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexResumeTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'user/resume';

    public function testIndex()
    {
        $this->makeEmployee();

        Resume::factory()
            ->times(5)
            ->create([
                'owner_id' => $this->employee->id
            ]);

        Resume::factory()->times(3)->create();

        $response = $this
            ->actingAs($this->employee)
            ->get(self::ROUTE)
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'alias',
                        'type',
                        'owner_id',
                        'created_at',
                        'updated_at',
                    ]
                ]
            ]);

        $owners = $response->json('data.*.owner_id');

        $owners = array_unique($owners);

        $this->assertCount(1, $owners);
        $this->assertSame($this->employee->id, reset($owners));
    }
}
