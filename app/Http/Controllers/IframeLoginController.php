<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Facades\JWTAuth;

class IframeLoginController extends Controller
{
    public function loginWithToken(Request $request)
    {
         $token = $request->query('token');

        try {
            $user = JWTAuth::setToken($token)->authenticate();

            if (! $user) {
                return response('Unauthorized', 401);
            }

            Auth::login($user);

            return response('OK');
        } catch (\Exception $e) {
            return response('Invalid token', 400);
        }
    }

    public function logout(Request $request){
        Auth::logout();
        Session::flush();
        return response('Logged out');
    }
}
