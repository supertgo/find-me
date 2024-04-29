<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AcademicRecordFactory extends Factory
{
    use HasFactory;

    public function definition(): array
    {
        return [
            'user_id' => fn() => User::factory()->create()->id,
            'institution' => $this->faker->company(),
            'field_of_study' => $this->faker->sentence(),
            'degree' => $this->faker->sentence(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'description' => $this->faker->sentence(),
            'is_in_progress' => $this->faker->boolean(),
        ];
    }

}
