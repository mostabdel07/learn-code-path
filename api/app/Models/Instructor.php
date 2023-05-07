<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Instructor extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "job_title",
    ];

    protected $guarded = [
        'id'
    ];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}