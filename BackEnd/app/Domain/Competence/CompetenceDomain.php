<?php

namespace App\Domain\Competence;

use Carbon\Carbon;
use Illuminate\Support\Collection;

readonly class CompetenceDomain implements CompetenceDomainInterface
{
    private ?int $id;
    private string $name;
    private ?string $description;
    private ?Carbon $createdAt;
    private ?Carbon $updatedAt;

    public function __construct(private CompetenceRepositoryInterface $repository)
    {
    }

    public function createCompetencesIfNotExist(array $competences): Collection
    {
        return collect(array_map([$this, 'createCompetenceIfNotExists'], $competences));
    }

    private function createCompetenceIfNotExists(array $competence): self
    {
        $attributes = $this->repository->createIfNotExists($competence);

        $createdCompetence = new self($this->repository);

        return $createdCompetence->fromArray($attributes);
    }

    private function fromArray(array $attributes): self
    {
        $this->id = $attributes['id'];
        $this->name = $attributes['name'];
        $this->description = $attributes['description'] ?? null;
        $this->createdAt = $attributes['created_at'] ? Carbon::parse($attributes['created_at']) : null;
        $this->updatedAt = $attributes['updated_at'] ? Carbon::parse($attributes['updated_at']) : null;

        return $this;
    }
}
