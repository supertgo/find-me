<?php

namespace Tests\Unit;

use Faker\Factory as Faker;
use Faker\Generator;
use PHPUnit\Framework\TestCase;

abstract class AbstractUnitTest extends TestCase
{
    protected Generator $faker;

    public function __construct(string $name)
    {
        parent::__construct($name);

        $this->faker = Faker::create();
    }


}
