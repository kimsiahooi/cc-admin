<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', function () {
        return inertia('Dashboard');
    })->name('dashboard');

    Route::prefix('customers')
        ->name('customers.')
        ->group(function () {
            Route::get('', [CustomerController::class, 'index'])->name('index');
            Route::get('/{id}', [CustomerController::class, 'show'])->name('show');
        });

    Route::prefix('orders')
        ->name('orders.')
        ->group(function () {
            Route::get('', [OrderController::class, 'index'])->name('index');
            Route::get('/{id}', [OrderController::class, 'show'])->name('show');
        });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
