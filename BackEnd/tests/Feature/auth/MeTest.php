<?php

namespace Tests\Feature\auth;

use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class MeTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'auth/me';

    public function testNonexistentEmail()
    {
        $this->makeUser();

        $this->actingAs($this->user)
            ->json('GET', self::ROUTE)
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'data' => [
                    'name',
                    'email',
                    'phone',
                    'id',
                    'type',
                ],
            ])
            ->assertJson([
                'data' => [
                    'name' => $this->user->name,
                    'email' => $this->user->email,
                    'phone' => $this->user->phone,
                    'type' => $this->user->type,
                    'id' => $this->user->id,
                ],
            ]);
    }
}
