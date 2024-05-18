<?php

namespace App\Domain\Company;

use App\Exceptions\Company\CnpjMustHaveTwelveDigitsException;

class CompanyDomain implements CompanyDomainInterface
{
    private ?int $id;
    private int $responsibleId;
    private string $name;
    private string $description;
    private string $phone;
    private string $email;
    private int $cnpj;
    private ?string $fantasyName;
    private ?string $location;

    public function __construct(private CompanyRepositoryInterface $repository)
    {
    }

    public function exists(int $id): bool
    {
        return $this->repository->exists($id);
    }

    public function save(): self
    {
        $createdData = $this->repository->save($this->toArray());

        return $this->fromArray($createdData);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->getId(),
            'responsible_id' => $this->getResponsibleId(),
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'phone' => $this->getPhone(),
            'email' => $this->getEmail(),
            'cnpj' => $this->getCnpj(),
            'fantasy_name' => $this->getFantasyName(),
            'location' => $this->getLocation(),
        ];
    }

    /**
     * @throws CnpjMustHaveTwelveDigitsException
     */
    public function fromArray(array $data): self
    {
        $this->setId($data['id'] ?? null);
        $this->setResponsibleId($data['responsible_id']);
        $this->setName($data['name']);
        $this->setDescription($data['description']);
        $this->setPhone($data['phone']);
        $this->setEmail($data['email']);
        $this->setCnpj($data['cnpj']);
        $this->setFantasyName($data['fantasy_name'] ?? null);
        $this->setLocation($data['location'] ?? null);

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): CompanyDomain
    {
        $this->id = $id;
        return $this;
    }

    public function getResponsibleId(): int
    {
        return $this->responsibleId;
    }

    public function setResponsibleId(int $responsibleId): CompanyDomain
    {
        $this->responsibleId = $responsibleId;
        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): CompanyDomain
    {
        $this->name = $name;
        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): CompanyDomain
    {
        $this->description = $description;
        return $this;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): CompanyDomain
    {
        $this->phone = $phone;
        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): CompanyDomain
    {
        $this->email = $email;
        return $this;
    }

    public function getCnpj(): int
    {
        return $this->cnpj;
    }

    /**
     * @throws CnpjMustHaveTwelveDigitsException
     */
    public function setCnpj(int $cnpj): CompanyDomain
    {
        if (strlen($cnpj) !== 12) {
            throw new CnpjMustHaveTwelveDigitsException($cnpj);
        }

        $this->cnpj = $cnpj;

        return $this;
    }

    public function getFantasyName(): ?string
    {
        return $this->fantasyName;
    }

    public function setFantasyName(?string $fantasyName): CompanyDomain
    {
        $this->fantasyName = $fantasyName;
        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(?string $location): CompanyDomain
    {
        $this->location = $location;
        return $this;
    }

}
