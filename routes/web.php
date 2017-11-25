<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', 'AuthController@index');

Route::get('user/verify/{verification_code}', 'AuthController@verifyUser');
Route::get('/', 'HomeController@index');

Route::group(['prefix' => 'admin', 'middleware' => ['jwt','role:Admin']], function(){
    Route::get('/', function(){
        return view('dashboard.admin.dashboard');
    });
});
// Route untuk user yang member
Route::group(['prefix' => 'member', 'middleware' => ['jwt','role:Member']], function(){
    Route::get('/', function(){
        return view('dashboard.member.dashboard');
    });
});
