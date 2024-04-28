<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * App\Models\Competence
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string|null $location
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
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
class Competence extends Model
{
    use HasFactory;

    protected $table = 'competences';

    protected $fillable = [
        'name',
        'description'
    ];
}
