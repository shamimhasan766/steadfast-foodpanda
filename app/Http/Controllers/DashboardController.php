<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function Index(){
        $ecommerce_token = session('ecommerce_token');
        return Inertia::render('dashboard', ['ecommerce_token' => $ecommerce_token]);
    }
}
