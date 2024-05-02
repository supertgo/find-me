<?php

namespace App\helpers\File;

use Illuminate\Http\UploadedFile;

interface FileHelperInterface
{
    public function storeRandomInPublicDirectory(UploadedFile $file): string;

    public function getUrlForPublicFile(string $path): string;

    public function deletePublicFile(string $path): void;

}
