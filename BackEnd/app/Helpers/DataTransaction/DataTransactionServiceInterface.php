<?php

namespace App\Helpers\DataTransaction;

interface DataTransactionServiceInterface
{
    function begin(): void;

    function commit(): void;

    function rollback(): void;
}
