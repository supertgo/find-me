<?php

namespace App\Domain\Job;


use Carbon\Carbon;

readonly class JobService implements JobServiceInterface
{
    private string $name;
    private string $description;
    private bool $isAvailable;
    private int $applicationsAmount;

    public function getName(): string
    {
        return $this->name;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function isAvailable(): bool
    {
        return $this->isAvailable;
    }

    public function getApplicationsAmount(): int
    {
        return $this->applicationsAmount;
    }

    public function getSalary(): ?int
    {
        return $this->salary;
    }

    public function getSalaryTimeUnit(): ?string
    {
        return $this->salaryTimeUnit;
    }

    public function getAcceptApplicationUntil(): ?Carbon
    {
        return $this->acceptApplicationUntil;
    }

    public function getWorkModel(): ?string
    {
        return $this->workModel;
    }

    public function getEmploymentType(): ?string
    {
        return $this->employmentType;
    }

    public function getWeekWorkload(): ?int
    {
        return $this->weekWorkload;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }


    private ?int $salary;
    private ?string $salaryTimeUnit;
    private ?Carbon $acceptApplicationUntil;
    private ?string $workModel;
    private ?string $employmentType;
    private ?int $weekWorkload;
    private ?string $location;
    private int $userId;
    private int $companyId;

    public function getUserId(): int
    {
        return $this->userId;
    }

    public function getCompanyId(): int
    {
        return $this->companyId;
    }

    public function __construct(private JobRepositoryInterface $jobRepository)
    {
    }

    public function fromArray(array $job): self
    {

        $this->name = $job['name'];
        $this->description = $job['description'];
        $this->isAvailable = $job['is_available'];
        $this->applicationsAmount = $job['applications_amount'];
        $this->salary = $job['salary'] ?? null;
        $this->salaryTimeUnit = $job['salary_time_unit'] ?? null;
        $this->acceptApplicationUntil = isset($job['accept_application_until'])
            ? Carbon::createFromTimeString($job['accept_application_until']) : null;
        $this->workModel = $job['work_model'] ?? null;
        $this->employmentType = $job['employment_type'] ?? null;
        $this->weekWorkload = $job['week_workload'] ?? null;
        $this->location = $job['location'] ?? null;
        $this->companyId = $job['company_id'];
        $this->userId = $job['user_id'];

        return $this;
    }
    public function save(): void
    {
        $this->jobRepository->createJob($this);
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'is_available' => $this->isAvailable,
            'applications_amount' => $this->applicationsAmount,
            'salary' => $this->salary,
            'salary_time_unit' => $this->salaryTimeUnit,
            'accept_application_until' => $this->acceptApplicationUntil ? $this->acceptApplicationUntil->format('Y-m-d H:i:s') : null,
            'work_model' => $this->workModel,
            'employment_type' => $this->employmentType,
            'week_workload' => $this->weekWorkload,
            'location' => $this->location,
            'user_id' => $this->userId,
            'company_id' => $this->companyId,
        ];
    }
}
