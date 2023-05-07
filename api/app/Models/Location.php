<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        "city",
        "adress",
    ];

    protected $guarded = [
        'id'
    ];

    public function onSiteCourse(): BelongsTo
    {
        return $this->belongsTo(OnSiteCourse::class);
    }
}