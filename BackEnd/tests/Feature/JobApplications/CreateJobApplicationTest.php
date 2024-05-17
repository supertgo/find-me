<?php

namespace Tests\Feature\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Models\Job;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class CreateJobApplicationTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'job/%s/application';


    public function testCreateApplicationJobSuccess()
    {
        $this->makeEmployee();
        $payload = $this->generatePayload();

        /** @var Job $job */
        $job = Job::factory()->create([
            'applications_amount' => 3,
        ]);

        $this
            ->actingAs($this->employee)
            ->json(
                'POST',
                sprintf(self::ROUTE, $job->id),
                $payload
            )
            ->assertStatus(Response::HTTP_CREATED)
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'job_id',
                    'user_id',
                    'status',
                    'cover_letter',
                    'created_at',
                    'updated_at',
                ]
            ])
            ->assertJson([
                'data' => [
                    'job_id' => $job->id,
                    'user_id' => $this->employee->id,
                    'status' => JobApplicationsStatusEnum::Pending->value,
                    'cover_letter' => $payload['cover_letter'],
                ]
            ]);

        $this->assertEquals(1, $job->applications()->count());
    }


    /**
     * @return array{
     *      cover_letter: string
     * }
     */
    public function generatePayload(): array
    {
        return [
            'cover_letter' => $this->faker->text()
        ];
    }
}
