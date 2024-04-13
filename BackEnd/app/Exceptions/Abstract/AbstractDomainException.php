<?php

namespace App\Exceptions\Abstract;

use Exception;

class AbstractDomainException extends Exception
{
    protected array $additionalInfo = [];

    public function __construct(
        protected $message,
    )
    {
        parent::__construct($message);
    }

    public function getAdditionalInfo(): array
    {
        return $this->additionalInfo;
    }

    public function render(): array
    {
        return [
            'message' => $this->message,
            'additional_info' => $this->getAdditionalInfo(),
        ];
    }
}
