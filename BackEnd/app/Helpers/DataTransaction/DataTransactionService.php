<?php

namespace App\Helpers\DataTransaction;

use DB;

class DataTransactionService implements DataTransactionServiceInterface
{
    public function begin(): void
    {
        DB::beginTransaction();
    }

    public function commit(): void
    {
        Db::commit();
    }

    public function rollback(): void
    {
        Db::rollBack();
    }
}
