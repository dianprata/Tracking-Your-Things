<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function doActivateMember($userId){
        $user = User::find($userId);

        if($user->doActiveMember()){
            return response()->json("Succesfull Activating Member", 200);
        }
    }
}
