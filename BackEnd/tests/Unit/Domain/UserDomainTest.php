<?php

namespace Tests\Unit\Domain;

use App\Domain\User\UserDomain;
use App\Domain\User\UserTypeEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use App\Exceptions\User\UnknownUserTypeException;
use Illuminate\Support\Str;
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

    public function testSetTypeWithEmptyString()
    {
        try {
            $this->domain->setType('');
        } catch (UnknownUserTypeException $e) {
            $this->assertInstanceOf(UnknownUserTypeException::class, $e);
            $this->assertEquals(ExceptionMessagesEnum::UnknownUserTypeException->value, $e->getMessage());
            $this->assertEquals(AbstractFindMeException::DEFAULT_HTTP_CODE, $e->getHttpCode());

            $additionalInfo = $e->getAdditionalInfo();
            $this->assertArrayHasKey('type', $additionalInfo);
            $this->assertEquals('', $additionalInfo['type']);

            return;
        }

        $this->fail('Expected exception of type UnknownUserTypeException not thrown.');
    }

    public function testSetTypeWithInvalidString()
    {
        $type = UserTypeEnum::Recruiter->value . Str::random();

        try {
            $this->domain->setType($type);
        } catch (UnknownUserTypeException $e) {
            $this->assertEquals(ExceptionMessagesEnum::UnknownUserTypeException->value, $e->getMessage());
            $this->assertEquals(AbstractFindMeException::DEFAULT_HTTP_CODE, $e->getHttpCode());

            $additionalInfo = $e->getAdditionalInfo();
            $this->assertArrayHasKey('type', $additionalInfo);
            $this->assertEquals($type, $additionalInfo['type']);

            return;
        }

        $this->fail('Expected exception of type UnknownUserTypeException not thrown.');
    }

    /**
     * @throws UnknownUserTypeException
     */
    public function testSetTypeWithValidStringType()
    {
        $type = UserTypeEnum::Recruiter->value;

        $this->domain->setType($type);

        $this->assertInstanceOf(UserTypeEnum::class, $this->domain->getType());
        $this->assertEquals($type, $this->domain->getType()->value);
    }

    /**
     * @throws UnknownUserTypeException
     */
    public function testSetTypeWithEnumType()
    {
        $type = UserTypeEnum::Recruiter;

        $this->domain->setType($type);

        $this->assertInstanceOf(UserTypeEnum::class, $this->domain->getType());
        $this->assertEquals($type->value, $this->domain->getType()->value);
    }

}
