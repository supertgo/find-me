<?php

namespace Database\Factories;

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
            'cnpj' => $this->faker->unique()->numberBetween(0, 16777215),
            'fantasy_name' => $this->faker->name . ' ' . $this->faker->unique()->companySuffix(),
        ];
    }

}
