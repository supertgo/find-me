<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Job
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $is_available
 * @property int $applications_amount
 * @property int|null $salary
 * @property string|null $salary_time_unit
 * @property string|null $accept_application_until
 * @property string|null $work_model
 * @property string|null $employment_type
 * @property int|null $week_workload
 * @property string|null $location
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property int $user_id
 * @property int $company_id
 * @method static Builder|Job newModelQuery()
 * @method static Builder|Job newQuery()
 * @method static Builder|Job query()
 * @method static Builder|Job whereAcceptApplicationUntil($value)
 * @method static Builder|Job whereApplicationsAmount($value)
 * @method static Builder|Job whereCreatedAt($value)
 * @method static Builder|Job whereDeletedAt($value)
 * @method static Builder|Job whereDescription($value)
 * @method static Builder|Job whereEmploymentType($value)
 * @method static Builder|Job whereId($value)
 * @method static Builder|Job whereIsAvailable($value)
 * @method static Builder|Job whereLocation($value)
 * @method static Builder|Job whereName($value)
 * @method static Builder|Job whereOwner($value)
 * @method static Builder|Job whereSalary($value)
 * @method static Builder|Job whereSalaryTimeUnit($value)
 * @method static Builder|Job whereUpdatedAt($value)
 * @method static Builder|Job whereWeekWorkload($value)
 * @method static Builder|Job whereWorkModel($value)
 * @mixin \Eloquent
 */
class Job extends Model
{
    use HasFactory;

    protected $table = 'jobs';

    protected $fillable = [
        'name',
        'description',
        'is_available',
        'applications_amount',
        'salary',
        'salary_time_unit',
        'accept_application_until',
        'work_model',
        'employment_type',
        'week_workload',
        'location',
        'user_id',
        'company_id',
    ];

    protected $hidden = [
        'deleted_at',
    ];
}
