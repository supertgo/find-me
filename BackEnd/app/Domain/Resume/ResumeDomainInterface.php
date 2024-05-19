<?php

namespace App\Domain\Resume;

use Carbon\Carbon;

interface ResumeDomainInterface
{
    function getId(): ?int;

    function setId(?int $id): self;

    function getOwnerId(): ?int;

    function setOwnerId(?int $ownerId): self;

    function getAlias(): string;

    function setAlias(string $alias): self;

    function getType(): ResumeTypeEnum;

    function setType(ResumeTypeEnum $type): self;

    function getCreatedAt(): ?Carbon;

    function setCreatedAt(?Carbon $createdAt): self;

    function getUpdatedAt(): ?Carbon;

    function setUpdatedAt(?Carbon $updatedAt): self;
}
