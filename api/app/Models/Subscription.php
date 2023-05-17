<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bootcamp_id',
        'subscription_date',
    ];

    protected $guarded = [
        'id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function bootcamp()
    {
        return $this->belongsTo(Bootcamp::class);
    }

}