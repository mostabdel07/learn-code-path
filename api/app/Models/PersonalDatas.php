<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PersonalDatas extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'birth_date',
        'location',
        'img',
    ];

    protected $guarded = [
        'id'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }
}