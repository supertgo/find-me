<?php

namespace Tests\Feature\Job;

use App\Domain\User\UserTypeEnum;
use App\Models\Job;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexJobTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'job';

    public function testCreateJobSuccess()
    {
        $owner = User::factory()->create();

        $originalJob = Job::factory(5)
            ->create();

       $this
            ->actingAs($owner)
            ->json('GET', self::ROUTE)
            ->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseMissing('jobs', ['id' => $originalJob->id,]);
    }
}
