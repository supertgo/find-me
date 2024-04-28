<?php

namespace App\Domain\User;

use App\Exceptions\User\UserEmailNotAvailableException;
use App\Exceptions\User\UserPhoneNotAvailableException;

class UserDomain implements UserDomainInterface
{
    private ?int $id;
    private string $name;
    private string $email;
    private string $phone;
    private ?string $password;
    private UserTypeEnum $type;

    public function __construct(private readonly UserRepositoryInterface $userRepository)
    {
    }

    public function fromArray(array $user): self
    {
        $this->setName($user['name']);
        $this->setEmail($user['email']);
        $this->setPhone($user['phone']);
        $this->setType(UserTypeEnum::from($user['type']));

        !empty($user['id']) && $this->setId($user['id']);
        !empty($user['password']) && $this->setPassword($user['password']);

        return $this;
    }

    /**
     * @throws UserEmailNotAvailableException
     * @throws UserPhoneNotAvailableException
     */
    public function update(): self
    {
        if (!$this->userRepository->isEmailAvailableToUpdate($this)) {
            throw new UserEmailNotAvailableException($this->getEmail());
        }

        if (!$this->userRepository->isPhoneAvailable($this)) {
            throw new UserPhoneNotAvailableException($this->getPhone());
        }

        $this->userRepository->update($this);

        return (new UserDomain($this->getRepository()))->loadUser($this->getId());
    }

    public function createUser(): void
    {
        $this->userRepository->createUser($this->toArray());
    }

    public function loadUser(int $userId): self
    {
        $user = $this->userRepository->getUser($userId);
        $this->name = $user['name'];
        $this->email = $user['email'];
        $this->phone = $user['phone'];
        $this->type = UserTypeEnum::from($user['type']);

        return $this;
    }

    public function toArray(): array
    {
        $user = [
            'name' => $this->getName(),
            'email' => $this->getEmail(),
            'phone' => $this->getPhone(),
            'type' => $this->getType()->value
        ];

        !empty($this->id) && $user['id'] = $this->id;
        !empty($this->password) && $user['password'] = $this->password;

        return $user;
    }

    public function exists(): bool
    {
        return $this->userRepository->exists($this->id);
    }

    public function users(): array
    {
        return $this->userRepository->getUsers();
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): UserDomain
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getType(): UserTypeEnum
    {
        return $this->type;
    }

    public function setType(UserTypeEnum $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): UserDomain
    {
        $this->id = $id;
        return $this;
    }

    private function setPassword(mixed $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getRepository(): UserRepositoryInterface
    {
        return $this->userRepository;
    }
}