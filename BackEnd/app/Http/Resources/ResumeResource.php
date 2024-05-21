<?php

namespace App\Http\Resources;

use App\Domain\Resume\ResumeDomain;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin ResumeDomain
 */
class ResumeResource extends JsonResource
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
            'owner_id' => $this->getOwnerId(),
            'alias' => $this->getAlias(),
            'type' => $this->getType()->value,
            'created_at' => $this->getCreatedAt()?->format('Y-m-d H:i:s'),
            'updated_at' => $this->getUpdatedAt()?->format('Y-m-d H:i:s'),
        ];
    }
}
