<?php

namespace App\Domain\Job;

interface JobDomainInterface
{
    public function save(): void;
    public function update(): void;
    public function delete(): void;

    public function toArray(): array;

    public function fromArray(array $job): self;
}
