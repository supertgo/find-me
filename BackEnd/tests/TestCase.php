<?php

namespace Tests;

use App\Domain\User\UserTypeEnum;
use App\Models\User;
use Faker\Factory as Faker;
use Faker\Generator;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, DatabaseTransactions;

    const BASE_ROUTE = 'api/';

    protected User $employee;
    protected User $recruiter;
    protected Generator $faker;

    public function setUp(): void
    {
        parent::setUp();

        $this->faker = Faker::create();
    }

    protected function makeEmployee(): void
    {
        $this->employee = User::factory()->create([
            'type' => UserTypeEnum::Employee->value,
        ]);
    }

    protected function makeRecruiter(): void
    {
        $this->employee = User::factory()->create([
            'type' => UserTypeEnum::Recruiter->value,
        ]);
    }
}
