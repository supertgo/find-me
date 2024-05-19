<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * App\Models\Resume
 *
 * @property int $id
 * @property int $owner_id
 * @property string $alias
 * @property string $type
 * @property string|null $file_path
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Resume newModelQuery()
 * @method static Builder|Resume newQuery()
 * @method static Builder|Resume query()
 * @method static Builder|Resume whereId($value)
 * @method static Builder|Resume whereOwnerId($value)
 * @method static Builder|Resume whereAlias($value)
 * @method static Builder|Resume whereType($value)
 * @method static Builder|Resume whereFilePath($value)
 * @method static Builder|Resume whereCreatedAt($value)
 * @method static Builder|Resume whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Resume extends Model
{
    use HasFactory;

    protected $table = 'resumes';

    protected $fillable = [
        'owner_id',
        'alias',
        'type',
        'file_path',
    ];

    protected $hidden = [
        'file_path',
    ];
}
