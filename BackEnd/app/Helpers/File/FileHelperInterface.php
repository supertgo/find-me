<?php

namespace App\Helpers\File;

use Illuminate\Http\UploadedFile;

interface FileHelperInterface
{
    function storeRandomInPublicDirectory(UploadedFile $file): string;

    function storeRandomInPrivateDirectory(UploadedFile $file): string;

    function getUrlForPublicFile(string $path): string;

    function deletePublicFile(string $path): void;
}
