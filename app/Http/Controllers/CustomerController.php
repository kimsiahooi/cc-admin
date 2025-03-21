<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $customer_id = $request->input('customer_id') ?? '';
        $entries = $request->input('entries') ?? 10;
        $page = $request->input('page') ?? 1;

        $filter_config = [
            'customer_id' => $customer_id,
            'entries' => $entries,
            'page' => $page,
        ];

        $response = fetchWithAuth()->get('/customers', [
            'include' => $customer_id,
            'per_page' => $entries,
            'page' => $page,
            'orderby' => 'id',
            'order' => 'desc'
        ]);

        if ($response->failed()) {
            return inertia('customers/Index', [
                'filter_config' => $filter_config
            ])->with('flash.error', 'Error fetching customers');
        }

        return inertia('customers/Index', [
            'customers' => $response->json(),
            'filter_config' => $filter_config
        ]);
    }
}
