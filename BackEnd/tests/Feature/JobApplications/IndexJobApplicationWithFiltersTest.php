<?php

namespace Tests\Feature\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsIncludesEnum;
use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Models\JobApplication;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexJobApplicationWithFiltersTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'job-applications';


    public function testCreateApplicationJobSuccess()
    {
        $this->makeEmployee();
        /** @var JobApplication $jobApplication */
        $jobApplication = JobApplication::factory()->create([
            'status' => JobApplicationsStatusEnum::Pending->value,
        ]);

        $payload = $this->generatePayload($jobApplication);

        JobApplication::factory()->times(2)->create([
            'status' => JobApplicationsStatusEnum::Canceled->value
        ]);

        $this
            ->actingAs($this->employee)
            ->json(
                'GET',
                self::ROUTE,
                $payload
            )
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonCount(1, 'data')
            ->assertJsonStructure($this->getJsonStructure())
            ->assertJson([
                'data' => [
                    [
                        'id' => $jobApplication->id,
                        'job_id' => $jobApplication->job_id,
                        'user_id' => $jobApplication->user_id,
                        'status' => $jobApplication->status,
                        'cover_letter' => $jobApplication->cover_letter,
                    ]
                ]
            ]);
    }


    /**
     * @return array{
     *      cover_letter: string
     * }
     */
    public function generatePayload(JobApplication $application): array
    {
        return [
            'includes' => JobApplicationsIncludesEnum::getValues(),
            'filters' => [
                'jobs_id' => [$application->job_id],
                'candidates_id' => [$application->user_id],
                'date_time_from' => $application->created_at->subDay()->format('Y-m-d H:i:s'),
                'date_time_to' => $application->created_at->addDay()->format('Y-m-d H:i:s'),
                'statuses' => [$application->status]
            ]
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
