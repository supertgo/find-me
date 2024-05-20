<?php

namespace App\Domain\Resume;

use Carbon\Carbon;

interface ResumeDomainInterface
{
    function fromArray(array $data): static;

    function toArray(): array;

    function getId(): ?int;

    function setId(?int $id): self;

    function getOwnerId(): ?int;

    function setOwnerId(?int $ownerId): self;

    function getAlias(): string;

    function setAlias(string $alias): self;

    function getType(): ResumeTypeEnum;

    function setType(ResumeTypeEnum|string $type): self;

    function getCreatedAt(): ?Carbon;

    function setCreatedAt(Carbon|string|null $createdAt): self;

    function getUpdatedAt(): ?Carbon;

    function setUpdatedAt(Carbon|string|null $updatedAt): self;

    public function canDownload(int $solicitorId): static;
}
