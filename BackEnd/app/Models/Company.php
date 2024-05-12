<?php

namespace App\Models;

use Database\Factories\CompanyFactory;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * App\Models\Job
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string|null $location
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
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
 * @property string $phone
 * @property string $email
 * @property int $cnpj
 * @property string|null $fantasy_name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Job> $jobs
 * @property-read int|null $jobs_count
 * @method static CompanyFactory factory($count = null, $state = [])
 * @method static Builder|Company whereCnpj($value)
 * @method static Builder|Company whereEmail($value)
 * @method static Builder|Company whereFantasyName($value)
 * @method static Builder|Company wherePhone($value)
 * @mixin Eloquent
 */
class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    public function jobs(): HasMany
    {
        return $this->hasMany(Job::class);
    }

    protected $fillable = [
    ];

    protected $hidden = [
        'deleted_at',
    ];
}
