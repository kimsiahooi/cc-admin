<?php

use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('order-notifications', function (Request $request) {
    $response = fetchWithAuth()->get('/orders', [
        'per_page' => $request->input('per_page') ?? 20,
    ]);

    if ($response->failed()) {
        return response([
            'success' => false,
            'message' => 'Error fetching orders'
        ], 400);
    }

    $orders = $response->json();

    return OrderResource::collection(collect($orders)->map(fn($order) => [
        'id' => $order['id'] ?? null,
        'date_created' => $order['date_created'] ?? null,
        'billing' => $order['billing'] ?? null,
        'line_items' => $order['line_items'] ?? null,
    ]));
});
