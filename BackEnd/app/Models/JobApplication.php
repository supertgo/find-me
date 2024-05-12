<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\JobApplication
 *
 * @property int $id
 * @property string $name
 * @property string $status
 * @property string $cover_letter
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Job newModelQuery()
 * @method static Builder|Job newQuery()
 * @method static Builder|Job query()
 * @property int $job_id
 * @property int $user_id
 * @method static Builder|JobApplication whereCoverLetter($value)
 * @method static Builder|JobApplication whereCreatedAt($value)
 * @method static Builder|JobApplication whereId($value)
 * @method static Builder|JobApplication whereJobId($value)
 * @method static Builder|JobApplication whereStatus($value)
 * @method static Builder|JobApplication whereUpdatedAt($value)
 * @method static Builder|JobApplication whereUserId($value)
 * @mixin Eloquent
 */
class JobApplication extends Model
{
    use HasFactory;

    protected $table = 'job_applications';

    protected $fillable = [
        'job_id',
        'user_id',
        'status',
        'cover_letter',
    ];

    protected $hidden = [
        'deleted_at',
    ];
}
