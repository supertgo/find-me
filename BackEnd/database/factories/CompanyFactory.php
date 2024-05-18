<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'description' => $this->faker->sentence(),
            'phone' => $this->faker->unique()->e164PhoneNumber,
            'email' => $this->faker->unique()->companyEmail(),
            'cnpj' => $this->faker->numerify('############'),
            'fantasy_name' => $this->faker->name . ' ' . $this->faker->unique()->companySuffix(),
            'responsible_id' => function () {
                /** @var User $user */
                $user = User::factory()->create();

                return $user->id;
            },
        ];
    }

}
