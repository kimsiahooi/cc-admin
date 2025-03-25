<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('order-notifications', function (Request $request) {
    $response = fetchWithAuth()->get('/orders', [
        'per_page' => 100,
    ]);

    if ($response->failed()) {
        return [
            'success' => false,
            'message' => 'Error fetching orders'
        ];
    }

    $orders = $response->json();

    return collect($orders)->map(fn($order) => [
        'id' => $order['id'] ?? null,
        'billing' => $order['billing'] ?? null,
        'line_items' => $order['line_items'] ?? null
    ]);
});
