<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $order_id = $request->input('order_id') ?? '';
        $status = $request->input('status') ?? 'any';
        $entries = $request->input('entries') ?? 10;
        $page = $request->input('page') ?? 1;

        $response = fetchWithAuth()->get('/orders', [
            'include' => $order_id,
            'status' => $status,
            'per_page' => $entries,
            'page' => $page,
        ]);

        if ($response->failed()) {
            return inertia('orders/Index')->with('flash.error', 'Error when fetching orders');
        }

        return inertia('orders/Index', [
            'orders' => $response->json(),
            'filter_config' => [
                'order_id' => $order_id,
                'status' => $status,
                'entries' => $entries,
                'page' => $page,
            ]
        ]);
    }
}
