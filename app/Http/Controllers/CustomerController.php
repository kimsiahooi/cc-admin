<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $customer_id = $request->input('customer_id') ?? null;
        $customer_email = $request->input('customer_email') ?? null;
        $entries = $request->input('entries') ?? 10;
        $page = $request->input('page') ?? 1;

        $filter_config = [
            'customer_id' => $customer_id ?? '',
            'customer_email' => $customer_email ?? '',
            'entries' => $entries,
            'page' => $page,
        ];

        $response = fetchWithAuth()->get('/customers', [
            'include' => $customer_id,
            'email' => $customer_email,
            'per_page' => $entries,
            'page' => $page,
            'orderby' => 'id',
            'order' => 'desc',
            'role' => 'all',
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

    public function show(int $id)
    {
        $response = fetchWithAuth()->get("/customers/$id");

        if ($response->failed()) {

            return inertia('customers/Show')->with('flash.error', "Error fetching customer id $id");
        }

        return inertia('customers/Show', [
            'customer' => $response->json(),
        ]);
    }
}
