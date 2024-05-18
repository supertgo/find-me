<?php

namespace Tests\Feature\Company;

use App\Models\Company;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class IndexCompanyTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'company';

    public function testIndex()
    {
        $this->makeEmployee();

        Company::factory()->times(5)->create();

        $this
            ->actingAs($this->employee)
            ->get(self::ROUTE)
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'description',
                        'phone',
                        'email',
                        'fantasy_name',
                    ]
                ]
            ]);
    }
}
