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

        $filter_config = [
            'order_id' => $order_id,
            'status' => $status,
            'entries' => $entries,
            'page' => $page,
        ];

        $response = fetchWithAuth()->get('/orders', [
            'include' => $order_id,
            'status' => $status,
            'per_page' => $entries,
            'page' => $page,
        ]);

        if ($response->failed()) {
            return inertia('orders/Index', [
                'filter_config' => $filter_config
            ])->with('flash.error', 'Error fetching orders');
        }

        return inertia(
            'orders/Index',
            [
                'orders' => $response->json(),
                'filter_config' => $filter_config
            ]
        );
    }

    public function show(int $id)
    {
        $response = fetchWithAuth()->get("/orders/$id");

        if ($response->failed()) {

            return inertia('orders/Show')->with('flash.error', "Error fetching order id $id");
        }

        return inertia('orders/Show', [
            'order' => $response->json(),
        ]);
    }
}
