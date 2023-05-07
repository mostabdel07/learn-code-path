<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
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

    

}