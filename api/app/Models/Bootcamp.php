<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Bootcamp extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'date',
        'duration',
        'location',
        'description',
        'image',
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

    public function Subscription(): BelongsToMany
    {
        return $this->belongsToMany(Subscription::class);
    }

}