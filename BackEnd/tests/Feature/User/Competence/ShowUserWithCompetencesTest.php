<?php

namespace Tests\Feature\User\Competence;

use App\Domain\User\UserIncludesEnum;
use App\Models\Competence;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ShowUserWithCompetencesTest extends TestCase
{
    use DatabaseTransactions;


    const ROUTE = self::BASE_ROUTE . 'user/%s';

    public function testShowUserSuccess()
    {
        $this->makeEmployee();
        $this->attachCompetencesToUser();

        $this
            ->actingAs(User::factory()->create())
            ->json(
                'GET',
                sprintf(self::ROUTE, $this->employee->id),
                [
                    'includes' => [UserIncludesEnum::Competences->value]
                ]
            )
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'data' => [
                    'name',
                    'email',
                    'phone',
                    'id',
                    'type',
                    'competences' => [
                        '*' => [
                            'name',
                            'description',
                            'created_at',
                            'updated_at',
                            'id'
                        ]
                    ]
                ]
            ]);
    }

    private function attachCompetencesToUser(): array
    {
        $competences = Competence::factory(3)->create();

        $this
            ->employee
            ->competences()
            ->attach($competences->pluck('id')->toArray());

        return $competences
            ->pluck('id')
            ->toArray();
    }
}
