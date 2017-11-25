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
    Route::get('test', function(){
        return response()->json(['foo'=>'bar']);
    });
});
