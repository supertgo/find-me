<?php

use App\Domain\JobApplications\JobApplicationsStatusEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_id')->constrained('jobs');
            $table->foreignId('user_id')->constrained('users');

            $table->enum('status', [
                JobApplicationsStatusEnum::Pending->value,
                JobApplicationsStatusEnum::Approved->value,
                JobApplicationsStatusEnum::Rejected->value,
                JobApplicationsStatusEnum::Canceled->value,
                JobApplicationsStatusEnum::Hired->value,
                JobApplicationsStatusEnum::InProgress->value,
            ]);

            $table->text('cover_letter')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
