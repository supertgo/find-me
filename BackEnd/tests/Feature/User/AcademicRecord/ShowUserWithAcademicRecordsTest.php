<?php

namespace Tests\Feature\User\AcademicRecord;

use App\Domain\User\UserIncludesEnum;
use App\Models\AcademicRecord;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ShowUserWithAcademicRecordsTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/%s';

    public function testShowUserSuccess()
    {
        $this->makeUser();
        $this->makeAcademicRecords();

        $this
            ->actingAs(User::factory()->create())
            ->json(
                'GET',
                sprintf(self::ROUTE, $this->user->id),
                [
                    'includes' => [UserIncludesEnum::AcademicRecords->value]
                ]
            )
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonCount(3, 'data.academic_records')
            ->assertJsonStructure([
                'data' => [
                    'name',
                    'email',
                    'phone',
                    'id',
                    'type',
                    'academic_records' => [
                        '*' => [
                            'id',
                            'institution',
                            'degree',
                            'start_date',
                            'end_date',
                            'field_of_study',
                            'is_in_progress',
                            'description',
                            'created_at',
                            'updated_at',
                        ]
                    ]
                ]
            ]);
    }

    private function makeAcademicRecords(): void
    {
        AcademicRecord::factory()
            ->count(3)
            ->create(['user_id' => $this->user->id]);
    }
}
