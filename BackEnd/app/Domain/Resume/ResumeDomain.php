<?php

namespace App\Domain\Resume;

use App\Exceptions\Resume\OnlyOwnerCanPatchResumeAliasException;
use App\Exceptions\Resume\ResumeNotFoundException;
use App\Exceptions\Resume\ResumeTypeNotAllowedException;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\UploadedFile;

class ResumeDomain implements ResumeDomainInterface
{
    const MAX_FILE_SIZE = 1024 * 5;
    private ?int $id;
    private ?int $ownerId;
    private string $alias;
    private ResumeTypeEnum $type;
    private ?Carbon $createdAt;
    private ?Carbon $updatedAt;

    public function __construct(protected ResumeRepositoryInterface $repository)
    {
    }

    /**
     * @throws ResumeTypeNotAllowedException
     */
    public function fromArray(array $data): static
    {
        $this->setId($data['id'] ?? null);
        $this->setOwnerId($data['owner_id'] ?? null);
        $this->setAlias($data['alias']);
        $this->setType($data['type']);
        $this->setCreatedAt($data['created_at'] ?? null);
        $this->setUpdatedAt($data['updated_at'] ?? null);

        return $this;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->getId(),
            'owner_id' => $this->getOwnerId(),
            'alias' => $this->getAlias(),
            'type' => $this->getType()->value,
            'created_at' => $this->getCreatedAt(),
            'updated_at' => $this->getUpdatedAt(),
        ];
    }

    /**
     * @throws ResumeNotFoundException
     * @throws ResumeTypeNotAllowedException
     * @throws Exception
     */
    public function load(int $resumeId): ResumeDomainInterface
    {
        if (!$this->repository->exists($resumeId)) {
            throw new ResumeNotFoundException($resumeId);
        }

        $data = $this->repository->get($resumeId);

        $type = ResumeTypeEnum::tryFrom($data['type']);

        if (!$type) {
            throw new ResumeTypeNotAllowedException($data['type']);
        }

        $resume = ResumeFactory::create($type, $this->repository);

        return $resume->fromArray($data);
    }

    /**
     * @throws OnlyOwnerCanPatchResumeAliasException
     */
    public function updateAlias(int $solicitorId, string $alias): static
    {
        if ($this->getOwnerId() !== $solicitorId) {
            throw new OnlyOwnerCanPatchResumeAliasException();
        }

        $this->setAlias($alias);
        $this->repository->updateAlias($this->getId(), $this->getAlias());

        return $this;
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

    /**
     * @throws ResumeTypeNotAllowedException
     */
    public function setType(ResumeTypeEnum|string $type): ResumeDomain
    {
        $type = $type instanceof ResumeTypeEnum ? $type : ResumeTypeEnum::tryFrom($type);

        if (!$type) {
            throw new ResumeTypeNotAllowedException($type);
        }

        $this->type = $type;

        return $this;
    }

    public function getCreatedAt(): ?Carbon
    {
        return $this->createdAt;
    }

    public function setCreatedAt(Carbon|string|null $createdAt): ResumeDomain
    {
        $this->createdAt = is_string($createdAt) ? Carbon::parse($createdAt) : $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?Carbon
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(Carbon|string|null $updatedAt): ResumeDomain
    {
        $this->updatedAt = is_string($updatedAt) ? Carbon::parse($updatedAt) : $updatedAt;

        return $this;
    }

    /**
     * @throws Exception
     */
    public function canDownload(int $solicitorId): static
    {
        throw new Exception('resume not loaded');
    }

    /**
     * @throws Exception
     */
    public function updateFile(int $id, UploadedFile $resume): static
    {
        throw new Exception('resume not loaded');
    }
}
