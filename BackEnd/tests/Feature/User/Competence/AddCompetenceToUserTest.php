<?php

namespace Tests\Feature\User\Competence;

use App\Domain\User\UserTypeEnum;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class AddCompetenceToUserTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/competence';

    public function testAddCompetencesToUser()
    {
        /** @var User $user */
        $user = User::factory()->create([
            'type' => UserTypeEnum::Employee->value
        ]);

        $competences = [
            ['name' => 'PHP'],
            ['name' => 'Laravel', 'description' => 'PHP framework'],
            ['name' => 'VueJS', 'description' => 'JavaScript framework'],
        ];

        $this
            ->actingAs($user)
            ->json('POST', self::ROUTE, ['competences' => $competences])
            ->assertStatus(Response::HTTP_NO_CONTENT);

        foreach ($competences as $competence) {
            $this->assertTrue(
                $user->competences()
                    ->where('name', $competence['name'])
                    ->where('description', $competence['description'] ?? null)
                    ->exists()
            );
        }
    }
}
