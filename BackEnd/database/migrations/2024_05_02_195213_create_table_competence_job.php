<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('competence_job', function (Blueprint $table) {
            $table->id();
            $table->foreignId('competence_id')->constrained('competences');
            $table->foreignId('job_id')->constrained('jobs');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('competence_job');
    }
};
