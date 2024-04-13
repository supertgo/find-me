<?php

namespace Tests\Feature\auth;

use App\Domain\User\UserTypeEnum;
use App\Models\User;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'auth/register';


    public function testUniqueEmail()
    {
        /** @var User $user */
        $user = User::factory()->create();
        $payload = $this->generatePayload();
        $payload['email'] = $user->email;

        $this->json('POST', self::ROUTE, $payload)
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure([
                'message',
                'errors' => ['email']
            ])
            ->assertJson([
                'errors' => [
                    'email' => [
                        'Email is already in use'
                    ]
                ]
            ]);
    }

    public function testUniquePhone()
    {
        /** @var User $user */
        $user = User::factory()->create();

        $payload = $this->generatePayload();
        $payload['phone'] = $user->phone;

        $this->json('POST', self::ROUTE, $payload)
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure([
                'message',
                'errors' => ['phone']
            ])
            ->assertJson([
                'errors' => [
                    'phone' => [
                        'Phone number is already in use'
                    ]
                ]
            ]);
    }

    public function testInUserTypeValidation()
    {
        $payload = $this->generatePayload();
        $payload['type'] = 'not a valid type';

        $this->json('POST', self::ROUTE, $payload)
            ->assertJsonStructure([
                'message',
                'errors' => ['type']
            ])
            ->assertJson([
                'message' => 'Type must be one of the following: recruiter,employee',
                'errors' => [
                    'type' => ['Type must be one of the following: recruiter,employee']
                ]
            ]);
    }

    public function testMissingRequiredFields()
    {
        $this->json('POST', self::ROUTE)
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure([
                'message',
                'errors' => [
                    'name',
                    'password',
                    'email',
                    'phone',
                    'type'
                ]
            ])
            ->assertJson([
                'message' => 'Name cannot be empty (and 4 more errors)',
                'errors' => [
                    'name' => ['Name cannot be empty'],
                    'password' => ['Password cannot be empty'],
                    'email' => ['Email cannot be empty'],
                    'phone' => ['Phone number cannot be empty'],
                    'type' => ['Type cannot be empty']
                ]
            ]);
    }

    public function testRegisterUserSuccess()
    {
        $payload = $this->generatePayload();

        $response = $this->json('POST', self::ROUTE, $payload);

        $response->assertStatus(Response::HTTP_NO_CONTENT);

        $this->assertDatabaseHas('users', [
            'email' => $payload['email'],
            'phone' => $payload['phone']
        ]);
    }

    /**
     * @return array{
     *      name: string,
     *      password: string,
     *      email: string,
     *      phone: string
     * }
     */
    public function generatePayload(): array
    {
        return [
            'name' => $this->faker->name,
            'password' => $this->faker->password,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->unique()->e164PhoneNumber,
            'type' => UserTypeEnum::Recruiter->value
        ];
    }


}
