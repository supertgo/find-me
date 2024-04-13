<?php

namespace App\Domain\Abstract;

use Illuminate\Support\Facades\DB;
use Throwable;

class AbstractRepository
{
    /**
     * @throws Throwable
     */
    public function beginTransaction(): void
    {
        DB::beginTransaction();
    }

    /**
     * @throws Throwable
     */
    public function commitTransaction(): void
    {
        DB::commit();
    }

    /**
     * @throws Throwable
     */
    public function rollbackTransaction(): void
    {
        DB::rollBack();
    }
}
