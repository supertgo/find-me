<?php

namespace App\Domain\User;

use App\Exceptions\User\CompetencesIdFilterMustBePositiveIntegersException;
use App\Exceptions\User\UnknownUserTypeException;

class UserFilters implements UserFilterInterface
{
    private ?array $competencesId;
    private ?string $name;
    private ?string $email;
    private UserTypeEnum $type;

    /**
     * @throws UnknownUserTypeException
     * @throws CompetencesIdFilterMustBePositiveIntegersException
     */
    public function fromArray(array $filters): self
    {
        $this->setType($filters['type'] ?? null);
        $this->setName($filters['name'] ?? null);
        $this->setEmail($filters['email'] ?? null);
        $this->setCompetencesId($filters['competences_id'] ?? null);

        return $this;
    }

    /**
     * @throws UnknownUserTypeException
     */
    public function setType(UserTypeEnum|string|null $type): UserFilters
    {
        if (is_string($type)) {
            $type = UserTypeEnum::tryFrom($type);

            if (!$type) {
                throw new UnknownUserTypeException($type);
            }
        }

        $this->type = $type;

        return $this;
    }

    public function setName(?string $name): UserFilters
    {
        $this->name = $name;

        return $this;
    }

    public function setEmail(?string $email): UserFilters
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @throws CompetencesIdFilterMustBePositiveIntegersException
     */
    public function setCompetencesId(?array $competencesId): UserFilters
    {
        if ($competencesId) {
            $nonPositiveIntegerValues = array_filter(
                $competencesId,
                fn($value) => !is_int($value) || $value <= 0
            );

            if (!empty($nonPositiveIntegerValues)) {
                throw new CompetencesIdFilterMustBePositiveIntegersException($nonPositiveIntegerValues);
            }
        }

        $this->competencesId = $competencesId;

        return $this;
    }

    public function toArray(): array
    {
        return [
            'competences_id' => $this->getCompetencesId(),
            'name' => $this->getName(),
            'email' => $this->getEmail(),
            'type' => $this->getType()?->value,
        ];
    }

    public function getCompetencesId(): ?array
    {
        return $this->competencesId;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function getType(): UserTypeEnum
    {
        return $this->type;
    }
}
