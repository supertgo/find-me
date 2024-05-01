<?php

namespace App\helpers\File;

use Illuminate\Http\UploadedFile;

interface FileHelperInterface
{
    public function storeRandomInPublicDirectory(UploadedFile $file): string;

}