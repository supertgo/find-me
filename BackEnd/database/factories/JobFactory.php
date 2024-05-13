<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->jobTitle(),
            'description' => $this->faker->paragraph(),
            'is_available' => $this->faker->boolean(),
            'applications_amount' => $this->faker->numberBetween(0, 1000),
            'salary' => $this->faker->randomNumber(5),
            'salary_time_unit' => $this->faker->randomElement(['hour', 'week', 'day', 'month']),
            'accept_application_until' => $this->faker->dateTimeBetween('now', '+1 year'),
            'work_model' => $this->faker->randomElement(['hybrid', 'onSite', 'homeOffice']),
            'employment_type' => $this->faker->randomElement(['full-time', 'part-time']),
            'week_workload' => $this->faker->numberBetween(1, 40),
            'location' => $this->faker->address,
            'company_id' => fn() => Company::factory(),
            'user_id' => fn() => User::factory(),
        ];
    }
}
