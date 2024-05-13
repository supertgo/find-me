<?php

namespace Tests\Feature\JobApplications;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Models\JobApplication;
use Tests\TestCase;

class UpdateJobApplicationStatusTest extends TestCase
{
    const ROUTE = self::BASE_ROUTE . 'job-application/%s/status';

    public function testUpdateStatus()
    {
        $this->makeEmployee();

        $jobApplication = JobApplication::factory()->create([
            'status' => JobApplicationsStatusEnum::Pending->value
        ]);

        $response = $this
            ->actingAs($this->employee)
            ->patch(
                sprintf(self::ROUTE, $jobApplication->id),
                [
                    'status' => JobApplicationsStatusEnum::Canceled->value
                ]
            );
        $response->assertNoContent();

        $this->assertDatabaseHas('job_applications', [
            'id' => $jobApplication->id,
            'status' => JobApplicationsStatusEnum::Canceled->value
        ]);
    }
}
