<?php

namespace App\Http\Resources;

use App\Domain\JobApplications\JobApplicationDomain;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin JobApplicationDomain
 */
class JobApplicationResource extends JsonResource
{
    /**
     *
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->getId(),
            'job_id' => $this->getJobId(),
            'user_id' => $this->getUserId(),
            'status' => $this->getStatus()->value,
            'cover_letter' => $this->getCoverLetter(),
            'created_at' => $this->getCreatedAt()->format('Y-m-d H:i:s'),
            'updated_at' => $this->getUpdatedAt()->format('Y-m-d H:i:s'),
        ];
    }
}
