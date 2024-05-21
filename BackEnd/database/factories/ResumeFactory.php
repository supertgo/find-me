<?php

namespace Database\Factories;

use App\Domain\Resume\ResumeTypeEnum;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResumeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'alias' => $this->faker->word(),
            'owner_id' => function () {
                /** @var User $owner */
                $owner = User::factory()->create();

                return $owner->id;
            },
            'type' => ResumeTypeEnum::File->value
        ];
    }

}
