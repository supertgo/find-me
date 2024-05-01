<?php

namespace App\helpers\File;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Str;

class LocalFileHelper implements FileHelperInterface
{
    public function storeRandomInPublicDirectory(UploadedFile $file): string
    {
        $name = $this->generateRandomName($file->getClientOriginalExtension());

        $file->move(Storage::disk('public')->path(''), $name);

        return $name;
    }

    public function getUrlForPublicFile(string $path): string
    {
        return Storage::disk('public')->url($path);
    }

    private function generateRandomName(string $extension): string
    {
        do {
            $name = Str::random(100);
        } while (File::exists($name . $extension));

        return sprintf("%s.%s", $name, $extension);
    }


}