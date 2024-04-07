<?php

namespace App\Domain\Job;

interface JobServiceInterface
{
    public function save(): void;

    public function toArray(): array;

    public function fromArray(array $job): self;
}
