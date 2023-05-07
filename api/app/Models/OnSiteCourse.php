<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class OnSiteCourse extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'participants',
        'location_id',

    ];

    protected $guarded = [
        'id',
    ];

    public function location(): HasOne
    {
        return $this->hasOne(Location::class);
    }
    
}