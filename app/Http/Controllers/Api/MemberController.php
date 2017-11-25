<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;

class MemberController extends Controller
{
    public function doActivateMember($userId){
        $user = User::find($userId);

        if($user->doActiveMember()){
            return response()->json("Succesfull Activating Member", 200);
        }
    }

    public function getMemberUnverified(){
        $user = User::with('roles')->where('active', false)->get();

        $member = $user->filter(function( $user ){
            return $user->getRoleMember();
        });

        return response()->json($member, 200);
    }

    public function doDeactiveMember($userId){
        $user = User::find($userId);

        if($user->doDeactiveMember()){
            return response()->json("Successfull Deactive Member");
        }
    }
}
