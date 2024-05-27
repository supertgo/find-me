<?php

namespace Tests\Feature\User\AcademicRecord;

use App\Domain\User\UserIncludesEnum;
use App\Models\AcademicRecord;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Collection;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexUserWithAcademicRecordsTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user';

    public function testShowUserSuccess()
    {
        /** @var Collection<User> $users */
        $users = User::factory()->count(3)->create();

        $users->each(function ($user) {
            $this->makeAcademicRecords($user);
        });

        $this
            ->actingAs(User::factory()->create())
            ->json(
                'GET',
                sprintf(self::ROUTE, $users->first()->id),
                [
                    'includes' => [UserIncludesEnum::AcademicRecords->value]
                ]
            )
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
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
                ]
            ]);
    }

    private function makeAcademicRecords(User $user): void
    {
        AcademicRecord::factory()
            ->count(3)
            ->create(['user_id' => $user->id]);
    }
}
