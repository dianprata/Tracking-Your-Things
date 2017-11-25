<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\UserRole;

class MemberController extends Controller
{
    public function doActivateMember($userId){
        $user = User::find($userId);

        if(UserRole::where('user_id', $userId)->first() === null){
            $userRoles = new UserRole;
            $userRoles->user_id = $userId;
            $userRoles->role_id = 2;
            $userRoles->save();
        }

        if($user->doActiveMember()){
            return response()->json("Succesfull Activating Member", 200);
        }
    }

    public function getMemberUnactive(){
        $user = User::with('roles')->where('active', false)->where('is_verified', 1)->get();

        $member = $user->filter(function( $user ){
            return $user->getRoleMember();
        });

        return response()->json($member, 200);
    }

    public function getMemberActive(){
        $user = User::with('roles')->where('active', true)->where('is_verified', 1)->get();

        $member = $user->filter(function( $user ){
            return $user->getRoleMember();
        });

        return response()->json($member, 200);
    }

    public function doUnverifyMember($userId){
        $user = User::find($userId);

        if($user->doUnverifyMember()){
            return response()->json("Successfull Unverify Member", 200);
        }
    }

    public function doDeactive($userId){
        $user =  User::find($userId);

        if($user->doDeactive()){
            return response()->json("Successfull Deactive Member", 200);
        }
    }
}
