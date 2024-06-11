<?php

namespace Tests\Unit\Domain;

use App\Domain\User\UserDomain;
use Tests\Unit\AbstractUnitTest;

class UserDomainTest extends AbstractUnitTest
{
    private UserDomain $domain;

    public function __construct(string $name)
    {
        parent::__construct($name);

        $this->domain = new UserDomain(new UserTestRepository());
    }

    public function testFromWithOnlyRequiredParametersArray(): void
    {
        $userData = [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber()
        ];

        $this->domain->fromArray($userData);

        $this->assertEquals($userData['name'], $this->domain->getName());
        $this->assertEquals($userData['email'], $this->domain->getEmail());
        $this->assertEquals($userData['phone'], $this->domain->getPhone());
    }

}
