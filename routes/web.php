<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
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

    Route::prefix('products')
        ->name('products.')
        ->group(function () {
            Route::get('', [ProductController::class, 'index'])->name('index');
            Route::get('/{id}', [ProductController::class, 'show'])->name('show');
        });

    Route::prefix('orders')
        ->name('orders.')
        ->group(function () {
            Route::get('', [OrderController::class, 'index'])->name('index');
            Route::get('/{id}', [OrderController::class, 'show'])->name('show');
        });

    Route::prefix('features')
        ->name('features.')
        ->group(function () {
            Route::get('{feature:slug}', [FeatureController::class, 'index'])->name('index');
            Route::put('{feature:slug}', [FeatureController::class, 'update'])->name('update');
        });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
