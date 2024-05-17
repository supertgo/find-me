<?php

namespace Tests\Feature\Job\Competence;

use App\Domain\Competence\Enum\CompetenceTypesEnum;
use App\Domain\Job\Enum\EmploymentTypeEnum;
use App\Domain\Job\Enum\SalaryTimeUnitEnum;
use App\Domain\Job\Enum\WorkModelEnum;
use App\Domain\User\UserTypeEnum;
use App\Models\Company;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class CreateJobWithCompetenceTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'job';


    public function testCreateJobWithCompetences()
    {
        $payload = $this->generatePayload();

        $payload['competences'] = $this->getCompetencesPayload();

        $this
            ->actingAs($this->generateRecruiterUser())
            ->json('POST', self::ROUTE, $payload)
            ->assertStatus(Response::HTTP_CREATED);

        $this->assertDatabaseHas('jobs', [
            'name' => $payload['name'],
            'description' => $payload['description'],
            'is_available' => $payload['is_available'],
            'applications_amount' => $payload['applications_amount'],
            'salary' => $payload['salary'],
            'salary_time_unit' => $payload['salary_time_unit'],
            'accept_application_until' => $payload['accept_application_until'],
            'work_model' => $payload['work_model'],
            'employment_type' => $payload['employment_type'],
            'week_workload' => $payload['week_workload'],
            'location' => $payload['location'],
            'company_id' => $payload['company_id'],
        ]);

        foreach ($payload['competences'] as $competence) {
            $this->assertDatabaseHas('competences', [
                'name' => $competence['name'],
                'description' => $competence['description'] ?? null,
                'type' => $competence['type'] ?? CompetenceTypesEnum::Other->value
            ]);
        }
    }

    public function generatePayload(): array
    {
        return [
            'name' => $this->faker->name,
            'description' => $this->faker->text,
            'is_available' => true,
            'applications_amount' => $this->faker->numberBetween(5, 100),
            'salary' => $this->faker->numberBetween(0, 10000),
            'salary_time_unit' => $this->faker->randomElement(array_column(SalaryTimeUnitEnum::cases(), 'value')),
            'accept_application_until' => Carbon::now()->addMonth()->format('Y-m-d H:i:s'),
            'work_model' => $this->faker->randomElement(array_column(WorkModelEnum::cases(), 'value')),
            'employment_type' => $this->faker->randomElement(array_column(EmploymentTypeEnum::cases(), 'value')),
            'week_workload' => $this->faker->numberBetween(20, 40),
            'location' => $this->faker->address,
            'company_id' => Company::factory()->create()->id,
        ];
    }

    private function getCompetencesPayload(): array
    {
        return [
            [
                'name' => 'php',
                'description' => 'PHP language',
                'type' => CompetenceTypesEnum::ProgrammingLanguage->value
            ],
            [
                'name' => 'laravel',
                'description' => 'Laravel framework',
                'type' => CompetenceTypesEnum::Framework->value
            ],
            [
                'name' => 'vuejs',
                'description' => 'VueJS framework',
                'type' => CompetenceTypesEnum::Framework->value
            ],
            [
                'name' => 'teste',
            ],

        ];
    }

    private function generateRecruiterUser(): User
    {
        return User::factory()->create([
            'type' => UserTypeEnum::Recruiter->value
        ]);
    }

}
