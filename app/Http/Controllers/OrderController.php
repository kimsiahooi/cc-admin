<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $response = fetchWithAuth()->get('/wp-json/wc/v3/orders');

        if ($response->failed()) {
            return inertia('orders/Index')->with('flash.error', 'Error when fetching orders');
        }

        return inertia('orders/Index', [
            'orders' => $response->json()
        ]);
    }
}
