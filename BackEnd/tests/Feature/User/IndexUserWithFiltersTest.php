<?php

namespace Tests\Feature\User;

use App\Domain\User\UserIncludesEnum;
use App\Models\Competence;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexUserWithFiltersTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user';

    public function testIndexUserSuccess()
    {
        $this->makeEmployee();
        User::factory(3)->create();

        /** @var Competence $competence */
        $competence = Competence::factory()->create();
        $this->employee->competences()->attach($competence->id);

        $payload = $this->generatePayload($competence->id);

        $this
            ->actingAs(User::factory()->create())
            ->json('GET', self::ROUTE, $payload)
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonCount(1, 'data')
            ->assertJsonStructure($this->getJsonStructure())
            ->assertJson($this->getExpectedReturnJson($competence));
    }

    private function generatePayload(int $competenceId): array
    {
        return [
            'filters' => [
                'competences_id' => [$competenceId],
                'name' => $this->employee->name,
                'email' => $this->employee->email,
                'type' => $this->employee->type
            ],
            'includes' => [
                UserIncludesEnum::Competences->value
            ]
        ];
    }

    private function getJsonStructure(): array
    {
        return [
            'data' => [
                '*' => [
                    'name',
                    'email',
                    'phone',
                    'id',
                    'type',
                    'about_me',
                    'competences' => [
                        '*' => [
                            'id',
                            'name',
                            'description'
                        ]
                    ]
                ]
            ]
        ];
    }

    private function getExpectedReturnJson(Competence $competence): array
    {
        return [
            'data' => [
                [
                    'name' => $this->employee->name,
                    'email' => $this->employee->email,
                    'phone' => $this->employee->phone,
                    'id' => $this->employee->id,
                    'type' => $this->employee->type,
                    'about_me' => $this->employee->about_me,
                    'competences' => [
                        [
                            'id' => $competence->id,
                            'name' => $competence->name,
                            'description' => $competence->description
                        ]
                    ]
                ]
            ]
        ];
    }
}
