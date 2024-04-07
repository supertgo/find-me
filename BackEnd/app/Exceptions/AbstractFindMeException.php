<?php

namespace App\Exceptions;
use Symfony\Component\HttpFoundation\Response;

use Exception;

class AbstractFindMeException extends Exception
{
    protected array $additionalInfo = [];

    public function __construct(
        protected  $message,
        protected int $httpCode = Response::HTTP_UNPROCESSABLE_ENTITY
    )
    {
        parent::__construct($message);
    }

    public function getAdditionalInfo(): array
    {
        return $this->additionalInfo;
    }

    public function getHttpCode(): int
    {
        return $this->getHttpCode();
    }
}
