<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public function index()
    {
        $response = Http::withBasicAuth(env('VITE_WORDPRESS_CONSUMER_KEY'), env('VITE_WORDPRESS_CONSUMER_SECRET'))->get(env('VITE_WORDPRESS_DOMAIN_URL') . '/wp-json/wc/v3/orders');

        if ($response->failed()) {
            return inertia('orders/Index')->with('flash.error', 'Error when fetching orders');
        }

        return inertia('orders/Index', [
            'orders' => $response->json()
        ]);
    }
}
