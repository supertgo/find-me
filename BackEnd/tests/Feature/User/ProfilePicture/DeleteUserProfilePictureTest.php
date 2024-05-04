<?php

namespace Tests\Feature\User\ProfilePicture;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Storage;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class DeleteUserProfilePictureTest extends TestCase
{
    use DatabaseTransactions;

    const ROUTE = self::BASE_ROUTE . 'user/profile-picture';

    public function testUpdateUserProfilePicture()
    {
        Storage::fake('public');

        $this->makeUser();

        $this->user->update([
            'profilePicturePath' => 'test'
        ]);

        $this
            ->actingAs($this->user)
            ->json('DELETE', self::ROUTE)
            ->assertStatus(Response::HTTP_NO_CONTENT);

        $this->user->refresh();

        $this->assertNull($this->user->profile_picture_path);
    }

}
