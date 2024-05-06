<?php

namespace Database\Seeders;

use App\Models\AcademicRecord;
use App\Models\Company;
use App\Models\Competence;
use App\Models\Job;
use App\Models\ProfessionalExperience;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory(15)->create();

        ProfessionalExperience::factory()->count($users->count())->create()->each(function ($professionalExperience) use ($users) {
            $user = $users->random();
            $user->professionalExperiences()->save($professionalExperience);
        });

        $competences = Competence::factory()->count(10)->create();

        $users->each(function ($user) use ($competences) {
            $user->competences()->attach($competences->random(rand(3, 7))->pluck('id')->toArray());
        });

        $academicRecords = AcademicRecord::factory()->count($users->count())->create();

        $shuffledUsers = $users->shuffle();
        $shuffledAcademicRecords = $academicRecords->shuffle();

        $shuffledUsers->each(function ($user) use (&$shuffledAcademicRecords) {
            $academicRecord = $shuffledAcademicRecords->pop();
            $user->academicRecords()->save($academicRecord);
        });

        Company::factory(5)->create()->each(function ($company) use ($users){
            Job::factory(3)->create([
                'company_id' => $company->id,
                'user_id' => $users->random(1)->first()->id,
            ]);
        });
    }
}
