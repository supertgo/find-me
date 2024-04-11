<?php

namespace Tests\Feature\Job;

use App\Domain\User\UserTypeEnum;
use App\Models\Job;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class DeleteJobTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'job/%s';


    public function testCreateJobSuccess()
    {
        $owner = $this->generateRecruiterUser();

        $originalJob = Job::factory()->create([
            'user_id' => $owner->id
        ]);

        $this
            ->actingAs($owner)
            ->json('DELETE', sprintf(self::ROUTE, $originalJob->id))
            ->assertStatus(Response::HTTP_NO_CONTENT);

        $this->assertDatabaseMissing('jobs', ['id' => $originalJob->id,]);
    }

    public function testNonNumericJobId()
    {
        $this
            ->actingAs($this->generateRecruiterUser())
            ->json('DELETE', sprintf(self::ROUTE, 'not an integer'))
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure([
                'message',
                'additional_info' => [
                    'job_id'
                ]
            ])->assertJson([
                'message' => 'Job id must be an integer',
                'additional_info' => [
                    'job_id' => 'not an integer'
                ]
            ]);
    }

    public function testJobExistsValidation()
    {
        $jobId = Job::max('id') + 1;

        $this
            ->actingAs($this->generateRecruiterUser())
            ->json('DELETE', sprintf(self::ROUTE, $jobId))
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure([
                'message',
                'additional_info' => [
                    'job_id'
                ]
            ])->assertJson([
                'message' => 'Job not found',
                'additional_info' => [
                    'job_id' => $jobId
                ]
            ]);
    }

    private function generateRecruiterUser(): User
    {
        return User::factory()->create([
            'type' => UserTypeEnum::Recruiter->value
        ]);
    }

}
