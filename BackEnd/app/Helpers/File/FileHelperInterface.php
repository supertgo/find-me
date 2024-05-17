<?php

namespace App\Helpers\File;

use Illuminate\Http\UploadedFile;

interface FileHelperInterface
{
    public function storeRandomInPublicDirectory(UploadedFile $file): string;

    public function getUrlForPublicFile(string $path): string;

    public function deletePublicFile(string $path): void;

}
