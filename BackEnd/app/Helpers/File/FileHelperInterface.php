<?php

namespace App\Helpers\File;

use Illuminate\Http\UploadedFile;
use Symfony\Component\HttpFoundation\StreamedResponse;

interface FileHelperInterface
{
    function storeRandomInPublicDirectory(UploadedFile $file): string;

    function storeRandomInPrivateDirectory(UploadedFile $file): string;

    function getUrlForPublicFile(string $path): string;

    function deletePublicFile(string $path): void;

    function deletePrivateFile(string $path): void;

    function downloadPrivateFile(string $path): StreamedResponse;
}
