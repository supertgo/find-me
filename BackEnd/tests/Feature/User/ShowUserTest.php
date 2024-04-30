<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ShowUserTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/%s';

    public function testShowUserSuccess()
    {
        $user = User::factory()->create();

        $this
            ->actingAs(User::factory()->create())
            ->json('GET', sprintf(self::ROUTE, $user->id))
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'data' => [
                    'name',
                    'email',
                    'phone',
                    'id',
                    'type',
                    'about_me'
                ]
            ]);
    }
    //todo check if user exists exception
}
