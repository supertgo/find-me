<?php

namespace App\Http\Resources;

use App\Domain\Company\CompanyDomain;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin CompanyDomain
 */
class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->getId(),
            'responsible_id' => $this->getResponsibleId(),
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'phone' => $this->getPhone(),
            'email' => $this->getEmail(),
            'cnpj' => $this->getCnpj(),
            'fantasy_name' => $this->getFantasyName(),
            'location' => $this->getLocation(),
        ];
    }
}
