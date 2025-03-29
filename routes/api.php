<?php

use App\Http\Controllers\Api\FeatureController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('features')
    ->name('api.features.')
    ->group(function () {
        Route::get('{feature:slug}', [FeatureController::class, 'index'])->name('index');
    });
