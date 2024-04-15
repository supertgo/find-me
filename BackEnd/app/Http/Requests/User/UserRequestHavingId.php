<?php

namespace App\Http\Requests\User;

use App\Exceptions\User\UserIdMustBeAnIntegerException;
use App\Http\Requests\AbstractRequest;

class UserRequestHavingId extends AbstractRequest
{
    /**
     * @throws UserIdMustBeAnIntegerException
     */
    public function getUserId(): int
    {
        $userId = $this->route('user_id');

        if ($userId == null || !is_numeric($userId)) {
            throw new UserIdMustBeAnIntegerException($userId);
        }

        return (int)$userId;
    }
}
