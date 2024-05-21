<?php

use App\Domain\Resume\ResumeTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();

            $table->foreignId('owner_id')->constrained('users');

            $table->string('alias');
            $table->enum('type', [
                ResumeTypeEnum::File->value,
                ResumeTypeEnum::Form->value,
            ]);
            $table->string('file_path')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};
