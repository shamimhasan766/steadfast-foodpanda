<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\IframeLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/iframe/auth/login', [IframeLoginController::class, 'loginWithToken']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'Index'])->name('dashboard');


        Route::get('/iframe/auth/logout', [IframeLoginController::class, 'logout']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
