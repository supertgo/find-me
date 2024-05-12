<?php

namespace Tests\Feature\User\ProfilePicture;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Storage;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class UpdateUserProfilePictureTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/profile-picture';

    public function testUpdateUserProfilePicture()
    {
        Storage::fake('public');

        $this->makeEmployee();

        $payload = $this->getPayload();

        $this->employee->update([
            'profilePicturePath' => 'test'
        ]);

        $this
            ->actingAs($this->employee)
            ->json('PATCH', self::ROUTE, $payload)
            ->assertStatus(Response::HTTP_OK)
            ->assertJsonStructure(['url']);

        $this->employee->refresh();

        $this->assertNotEquals('test', $this->employee->profile_picture_path);

        $explodedUrl = explode('/', $this->employee->profile_picture_path);
        $this->assertTrue(
            Storage::disk('public')
                ->exists(end($explodedUrl))
        );
    }

    private function getPayload(): array
    {

        $file = $this->faker->image(Storage::disk('public')->path(''));

        $uploadedFile = new UploadedFile(
            $file,
            'profile_picture.jpg',
            'image/jpeg',
            null,
            true
        );

        return ['profile_picture' => $uploadedFile];
    }
}
