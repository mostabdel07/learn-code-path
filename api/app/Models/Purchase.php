<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'total_price',

    ];

    protected $guarded = [
        'id'
    ];

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class);
    }

}