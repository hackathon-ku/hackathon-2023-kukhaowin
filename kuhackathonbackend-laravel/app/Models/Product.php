<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'descriptions',
        'image',
        'price',
        'is_free',
        'username',
        'user_profile',
    ];
}
