<?php

namespace Tests\Feature\User\Competence;

use App\Domain\User\UserIncludesEnum;
use App\Models\Competence;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexUserWithCompetenceTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user';

    public function testIndexUserSuccess()
    {
        $users = User::factory(3)->create();

        $users->each(function ($user) {
            $user->competences()->attach(Competence::factory(3)->create());
        });

        $this
            ->actingAs($users->first())
            ->json(
                'GET',
                self::ROUTE,
                [
                    'includes' => [UserIncludesEnum::Competences->value]
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
                        'competences' => [
                            '*' => [
                                'id',
                                'name',
                                'description',
                                'created_at',
                                'updated_at'
                            ]
                        ]
                    ]
                ]
            ]);
    }
}
