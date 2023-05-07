<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_name',
        'headline',
        'img',
        'user_id',
        'instructor_id',
    ];

    protected $guarded = [
        'id'
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
    }

    public function instructor(): HasOne
    {
        return $this->hasOne(Instructor::class);
    }

    public function purchases(): BelongsToMany
    {
        return $this->belongsToMany(Purchase::class);
    }
}