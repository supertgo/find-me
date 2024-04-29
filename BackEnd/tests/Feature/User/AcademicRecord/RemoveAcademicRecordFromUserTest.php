<?php

namespace Tests\Feature\User\AcademicRecord;

use App\Models\AcademicRecord;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class RemoveAcademicRecordFromUserTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/academic-records';

    public function testAddCompetencesToUser()
    {
        $this->makeUser();

        $academicRecordIds = $this->createAcademicRecords();

        $this
            ->actingAs($this->user)
            ->json('DELETE', self::ROUTE, ['academicRecordsId' => $academicRecordIds])
            ->assertStatus(Response::HTTP_NO_CONTENT);

        $this->assertSame(0, $this->user->academicRecords()->count());
    }

    private function createAcademicRecords(): array
    {
        return AcademicRecord::factory()
            ->count(3)
            ->create(['user_id' => $this->user->id])
            ->pluck('id')
            ->toArray();
    }
}
