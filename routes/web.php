<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', function () {
        return inertia('Dashboard');
    })->name('dashboard');

    Route::prefix('orders')
        ->name('orders.')
        ->group(function () {
            Route::get('/', [OrderController::class, 'index'])->name('index');
        });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
