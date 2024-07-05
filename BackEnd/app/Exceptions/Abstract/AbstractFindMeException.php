<?php

namespace App\Exceptions\Abstract;

use Exception;
use Symfony\Component\HttpFoundation\Response;

class AbstractFindMeException extends Exception
{
    protected array $additionalInfo = [];

    const DEFAULT_HTTP_CODE = Response::HTTP_UNPROCESSABLE_ENTITY;

    public function __construct(
        protected     $message,
        protected int $httpCode = self::DEFAULT_HTTP_CODE
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
        return $this->httpCode;
    }

    public function render(): array
    {
        return [
            'message' => $this->message,
            'additional_info' => $this->getAdditionalInfo(),
        ];
    }

}
