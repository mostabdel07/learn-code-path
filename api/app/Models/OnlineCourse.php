<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OnlineCourse extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'price',
        'img',
        'headline',
        'instructor_id',
        'id',
    ];

    public function instructor()
    {
        return $this->belongsTo(Instructor::class);
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }

}