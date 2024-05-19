<?php

namespace App\Domain\Resume;

use Carbon\Carbon;

class ResumeDomain implements ResumeDomainInterface
{
    const MAX_FILE_SIZE = 1024 * 5;
    private ?int $id;
    private ?int $ownerId;
    private string $alias;
    private ResumeTypeEnum $type;
    private ?Carbon $createdAt;
    private ?Carbon $updatedAt;

    public function __construct(private ResumeRepositoryInterface $repository)
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): ResumeDomain
    {
        $this->id = $id;
        return $this;
    }

    public function getOwnerId(): ?int
    {
        return $this->ownerId;
    }

    public function setOwnerId(?int $ownerId): ResumeDomain
    {
        $this->ownerId = $ownerId;
        return $this;
    }

    public function getAlias(): string
    {
        return $this->alias;
    }

    public function setAlias(string $alias): ResumeDomain
    {
        $this->alias = $alias;
        return $this;
    }

    public function getType(): ResumeTypeEnum
    {
        return $this->type;
    }

    public function setType(ResumeTypeEnum $type): ResumeDomain
    {
        $this->type = $type;
        return $this;
    }

    public function getCreatedAt(): ?Carbon
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?Carbon $createdAt): ResumeDomain
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getUpdatedAt(): ?Carbon
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?Carbon $updatedAt): ResumeDomain
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }
}
