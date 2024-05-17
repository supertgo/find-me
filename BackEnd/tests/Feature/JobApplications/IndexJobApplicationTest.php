<?php

namespace Tests\Feature\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsIncludesEnum;
use App\Models\JobApplication;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Collection;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexJobApplicationTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'job-application';


    public function testCreateApplicationJobSuccess()
    {
        $this->makeEmployee();
        $payload = $this->generatePayload();

        /** @var Collection<JobApplication> $jobApplications */
        $jobApplications = JobApplication::factory()->times(3)->create();

        $response = $this
            ->actingAs($this->employee)
            ->json(
                'GET',
                self::ROUTE,
                $payload
            )
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure($this->getJsonStructure());

        $this->assertTrue(
            $jobApplications->pluck('id')->toArray() == $response->json('data.*.id')
        );
    }


    /**
     * @return array{
     *      cover_letter: string
     * }
     */
    public function generatePayload(): array
    {
        return [
            'includes' => JobApplicationsIncludesEnum::getValues(),
        ];
    }

    public function getJsonStructure(): array
    {
        return [
            'data' => [
                '*' => [
                    'id',
                    'job_id',
                    'user_id',
                    'status',
                    'cover_letter',
                    'created_at',
                    'updated_at',
                    'job' => [
                        'id',
                        'name',
                        'description',
                        'is_available',
                        'applications_amount',
                        'salary',
                        'salary_time_unit',
                        'accept_application_until',
                        'work_model',
                        'employment_type',
                        'week_workload',
                        'location',
                        'company_id',
                        'created_at',
                        'updated_at',
                    ],
                    'candidates' => [
                        '*' => [
                            'name',
                            'email',
                            'phone',
                            'id',
                            'type',
                            'about_me',
                            'profile_picture_path',
                            'created_at',
                            'updated_at',
                        ]
                    ]
                ]
            ]
        ];
    }
}
