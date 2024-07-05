<?php

namespace Tests\Unit\Domain;

use App\Domain\User\UserDomain;
use App\Domain\User\UserTypeEnum;
use App\Exceptions\Abstract\AbstractFindMeException;
use App\Exceptions\ExceptionMessagesEnum;
use App\Exceptions\User\UnknownUserTypeException;
use App\Exceptions\User\UserEmailNotAvailableException;
use App\Exceptions\User\UserPhoneNotAvailableException;
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

    public function testSetIdWithNullable()
    {
        $this->domain->setId(null);

        $this->assertNull($this->domain->getId());
    }

    public function testSetIdWithInteger()
    {
        $id = $this->faker->randomNumber();

        $this->domain->setId($id);

        $this->assertEquals($id, $this->domain->getId());
    }

    public function testSetAboutMeWithNullable()
    {
        $this->domain->setAboutMe(null);

        $this->assertNull($this->domain->getAboutMe());
    }

    public function testSetAboutMeWithString()
    {
        $aboutMe = $this->faker->text();

        $this->domain->setAboutMe($aboutMe);

        $this->assertEquals($aboutMe, $this->domain->getAboutMe());
    }

    public function testSetPasswordWithNullable()
    {
        $this->domain->setPassword(null);

        $this->assertNull($this->domain->getPassword());
    }

    public function testSetPasswordWithString()
    {
        $password = $this->faker->password();

        $this->domain->setPassword($password);

        $this->assertEquals($password, $this->domain->getPassword());
    }

    /**
     * @throws UnknownUserTypeException
     */
    public function testFromArrayWithAllFields()
    {
        $userData = [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
            'type' => UserTypeEnum::Recruiter,
            'id' => $this->faker->randomNumber(),
            'about_me' => $this->faker->text(),
            'password' => $this->faker->password()
        ];

        $this->domain->fromArray($userData);

        array_walk($userData, function ($value, $key) {
            $this->assertEquals($value, $this->domain->{'get' . Str::studly($key)}());
        });
    }

    public function testLoadUser()
    {
        $user = $this->domain->loadUser(1);

        $this->assertEquals(1, $user->getId());
    }

    /**
     * @throws UserPhoneNotAvailableException
     * @throws UserEmailNotAvailableException
     */
    public function testUserUpdateWithInvalidEmail()
    {
        $this->domain->setEmail(1 . Str::random());

        $this->expectException(UserEmailNotAvailableException::class);
        $this->domain->update();
    }

    /**
     * @throws UserPhoneNotAvailableException
     * @throws UserEmailNotAvailableException
     */
    public function testUserUpdateWithInvalidPhone()
    {
        $this->domain
            ->setPhone(27548894)
            ->setEmail('email');

        $this->expectException(UserPhoneNotAvailableException::class);
        $this->domain->update();
    }

    /**
     * @throws UserEmailNotAvailableException
     * @throws UserPhoneNotAvailableException
     */
    public function testUpdateSuccess()
    {
        $this->domain
            ->setName('User 1')
            ->setEmail('a' . Str::random())
            ->setPhone('1')
            ->setId(1);

        $this->domain->update();

        $this->assertEquals(
            UserTestRepository::UPDATED_USER_NAME,
            $this->domain->getName()
        );
    }

    /**
     * @throws UnknownUserTypeException
     */
    public function testCreateUser()
    {
        $userData = [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
            'type' => UserTypeEnum::Recruiter,
            'id' => $this->faker->randomNumber(),
            'about_me' => $this->faker->text(),
            'password' => $this->faker->password()
        ];

        $this->domain->fromArray($userData);

        $user = $this->domain->createUser();

        array_walk($userData, function ($value, $key) use ($user) {
            $this->assertEquals($value, $this->domain->{'get' . Str::studly($key)}());
        });
    }
}
