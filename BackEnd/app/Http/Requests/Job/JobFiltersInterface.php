<?php

namespace App\Http\Requests\Job;

use Carbon\Carbon;

interface JobFiltersInterface
{
    function fromArray(array $filters): self;

    function setName(?string $name): self;

    function setDescription(?string $description): self;

    function setIsAvailable(?bool $isAvailable): self;

    function setSalaryFrom(?int $salaryFrom): self;

    function setSalaryTo(?int $salaryTo): self;

    function getSalaryFrom(): ?int;

    function setSalaryTimeUnits(?array $salaryTimeUnits): self;

    function setAcceptApplicationUntil(Carbon|string|null $acceptApplicationUntil): self;

    function setWorkModels(?array $workModels): self;

    function setEmploymentTypes(?array $employmentTypes): self;

    function setWeekWorkloadFrom(?int $weekWorkloadFrom): self;

    function setWeekWorkloadTo(?int $weekWorkloadTo): self;

    function getWeekWorkloadFrom(): ?int;

    function setLocation(?string $location): self;

    function setCompanyIds(?array $companyIds): self;

    function setUserIds(?array $userIds): self;

    function setCompetencesId(?array $competencesId): self;

    function toArray(): array;

    function getName(): ?string;

    function getDescription(): ?string;

    function getIsAvailable(): ?bool;

    function getSalaryTo(): ?int;

    function getSalaryTimeUnits(): ?array;

    function getAcceptApplicationUntil(): ?Carbon;

    function getWorkModels(): ?array;

    function getEmploymentTypes(): ?array;

    function getWeekWorkloadTo(): ?int;

    function getLocation(): ?string;

    function getCompanyIds(): ?array;

    function getUserIds(): ?array;

    function getCompetencesId(): ?array;

}
