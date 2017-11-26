<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@auth');
Route::post('recover', 'AuthController@recover');
Route::get('logout', 'AuthController@logout');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('user/activate/{userId}', 'Api\MemberController@doActivateMember');
    Route::get('user/unverify/{userId}', 'Api\MemberController@doUnverifyMember');
    Route::get('user/deactive/{userId}', 'Api\MemberController@doDeactive');
    Route::get('member/unactive', 'Api\MemberController@getMemberUnactive');
    Route::get('member/active', 'Api\MemberController@getMemberActive');

    Route::post('product/create', 'Api\TringsController@createProduct');
    Route::post('product/edit/{productId}', 'Api\TringsController@editProduct');
    Route::get('product/showProduct', 'Api\TringsController@showProduct');
    Route::get('product/showProduct/{productId}/{quantity}', 'Api\TringsController@detailsProduct');
    Route::get('product/destroy/{productId}', 'Api\TringsController@destroyProduct');

    Route::post('category/create', 'Api\TringsController@createCategory');
    Route::get('category/show', 'Api\TringsController@showCategory');
    Route::post('category/edit/{categoryId}', 'Api\TringsController@editCategory');
    Route::get('category/destroy/{categoryId}', 'Api\TringsController@destroyCategory');

    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
});
