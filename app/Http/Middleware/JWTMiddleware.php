<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Auth;

class JWTMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
     public function handle($request, Closure $next)
     {
         $token = $request->cookie('token');
         if($token == ""){
             return response()->json('token required.',403);
         }
         try {
             $user = JWTAuth::authenticate($token);
             if($user){
                 return $next($request);
             } else {
                 return redirect('/');
             }

         } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

             return response()->json(['token_expired'], $e->getStatusCode());

         } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

             return response()->json(['token_invalid'], $e->getStatusCode());

         } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

             return response()->json(['token_absent'], $e->getStatusCode());

         }
     }
}
