<?php

namespace App\Domain\User;

use App\Domain\Competence\CompetenceDomainInterface;
use Illuminate\Support\Collection;

interface UserDomainInterface
{
    public function fromArray(array $user): self;
    public function update(): self;

    public function createUser(): self;
    public function loadUser(int $userId): self;
    public function toArray(): array;
    public function exists(): bool;
    public function users(): array;

    /** @param Collection<CompetenceDomainInterface> $competences */
    public function attachCompetences(Collection $competences): self;
    public function getName(): string;
    public function setName(string $name): self;
    public function getEmail(): string;
    public function setEmail(string $email): self;
    public function getPhone(): string;
    public function setPhone(string $phone): self;
    public function getType(): UserTypeEnum;
    public function setType(UserTypeEnum $type): self;
    public function getId(): ?int;
    public function setId(?int $id): self;
    public function getRepository(): UserRepositoryInterface;
    public function removeCompetence(int $competenceId): self;
    public function loadUserWithIncludes(int $userId, array $includes): array;
    public function usersWithIncludes(array $includes): array;
}
