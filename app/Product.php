<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'category_id', 'price', 'quantity'];

    public function getCategory(){
        return $this->belongsTo('App\Category', 'category_id');
    }
}
