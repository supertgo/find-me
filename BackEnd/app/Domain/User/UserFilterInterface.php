<?php

namespace App\Domain\User;

use App\Domain\Competence\CompetencesIdFilterMustBePositiveIntegersException;
use App\Exceptions\User\UnknownUserTypeException;

interface UserFilterInterface
{
    /**
     * @throws UnknownUserTypeException
     * @throws CompetencesIdFilterMustBePositiveIntegersException
     */
    public function fromArray(array $filters): self;

    public function toArray(): array;

    public function getCompetencesId(): ?array;

    /**
     * @throws CompetencesIdFilterMustBePositiveIntegersException
     */
    public function setCompetencesId(?array $competencesId): self;

    public function getName(): ?string;

    public function setName(?string $name): self;

    public function getEmail(): ?string;

    public function setEmail(?string $email): self;

    public function getType(): UserTypeEnum;

    /**
     * @throws UnknownUserTypeException
     */
    public function setType(UserTypeEnum|string|null $type): self;
}
