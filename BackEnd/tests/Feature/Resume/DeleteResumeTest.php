<?php

namespace Tests\Feature\Resume;

use App\Domain\Resume\ResumeTypeEnum;
use App\Models\Resume;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Storage;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class DeleteResumeTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/resume/%s';

    public function testDeleteResume()
    {
        Storage::fake('public');

        $this->makeEmployee();

        $resume = Resume::factory()->create([
            'owner_id' => $this->employee->id,
            'type' => ResumeTypeEnum::File->value,
            'file_path' => 'test'
        ]);

        $this
            ->actingAs($this->employee)
            ->delete(sprintf(self::ROUTE, $resume->id))
            ->assertStatus(Response::HTTP_NO_CONTENT);

        $this->assertFalse(Resume::where('id', $resume->id)->exists());
        $this->assertTrue(Resume::withTrashed()->where('id', $resume->id)->exists());
    }

}
