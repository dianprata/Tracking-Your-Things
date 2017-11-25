<?php

namespace App\Helper;
use JWTAuth;
use Carbon\Carbon;

class JWTHelper {

    private static $jwt_user;

    public static function encodeUser($user){
        $config = [
            'iat' => strtotime(Carbon::now()),
            'iss' => url('/'),
            'exp' => strtotime(Carbon::now()->addWeeks(2))
        ];
        $jwt = JWTAuth::fromUser($user,$config);
        return $jwt;
    }
}
