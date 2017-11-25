<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Product;
use App\Category;

class TringsController extends Controller
{
    public function createProduct(Request $request){
        $product = new Product;
        $product->name = $request->name;
        $product->category_id = $request->category_id;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->save();

        return response()->json("Successfull Create Product", 200);
    }

    public function editProduct($productId, Request $request){
        $product = new Product;
        $product->name = $request->name;
        $product->category_id = $request->category_id;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->save();

        $oldProductRecord = Product::find($productId);
        $oldProductRecord->void = 1;
        $oldProductRecord->save();
    }

    public function showProduct(){
        $product = Product::with('getCategory')->where('void', 0)->get();

        return response()->json($product, 200);
    }

    public function destroyProduct($productId){
        $product = Product::find($productId);
        $product->delete();
    }

    public function createCategory(Request $request){
        $category = new Category;
        $category->name = $request->name;
        $category->save();
    }

    public function showCategory(){
        $category = Category::get();

        return response()->json($category, 200);
    }

    public function editCategory($categoryId, Request $request){
        $category = Category::find($categoryId);
        $category->name = $request->name;
        $category->save();
    }

    public function destroyCategory($categoryId){
        $category = Category::find($categoryId);
        $category->delete();
    }
}
