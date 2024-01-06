<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    use UUID;


    protected $fillable = [
        'name',
        'image',
        'description',
        'qty',
        'category_id',
        'price',
        'discount'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
