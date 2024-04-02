<?php

namespace App\Domain\Abstract;

use Illuminate\Support\Facades\DB;

class AbstractRepository
{
    public function beginTransaction()
    {
        DB::beginTransaction();
    }

    public function commitTransaction()
    {
        DB::commit();
    }

    public function rollbackTransaction()
    {
        DB::rollBack();
    }


}