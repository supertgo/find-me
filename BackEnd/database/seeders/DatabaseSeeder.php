<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Job;
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
       $users =  User::factory(15)->create();

        Company::factory(5)->create()->each(function ($company) use ($users){
            Job::factory(3)->create([
                'company_id' => $company->id,
                'user_id' => $users->random(1)->first()->id,
            ]);
        });
    }
}
