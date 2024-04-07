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
            'salary' => $this->faker->optional()->randomNumber(5),
            'salary_time_unit' => $this->faker->optional()->randomElement(['hour', 'week', 'day', 'month']),
            'accept_application_until' => $this->faker->optional()->dateTimeBetween('now', '+1 year'),
            'work_model' => $this->faker->optional()->randomElement(['hybrid', 'onSite', 'homeOffice']),
            'employment_type' => $this->faker->optional()->randomElement(['full-time', 'part-time']),
            'week_workload' => $this->faker->optional()->numberBetween(1, 40),
            'location' => $this->faker->optional()->address,
            'company_id' => Company::factory(),
            'user_id' => User::factory(),
        ];
    }

}
