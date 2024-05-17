<?php

namespace Database\Factories;

use App\Domain\JobApplications\Enum\JobApplicationsStatusEnum;
use App\Models\Job;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobApplicationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => fn() => User::factory(),
            'job_id' => fn() => Job::factory(),
            'status' => $this->faker->randomElement(JobApplicationsStatusEnum::getValues()),
            'cover_letter' => $this->faker->paragraph(),
        ];
    }
}
