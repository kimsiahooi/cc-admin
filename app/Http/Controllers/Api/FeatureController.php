<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Feature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    public function index(Feature $feature)
    {
        $orders = [];
        $setting = json_decode($feature->data);

        if ($setting->is_active) {
            $response = fetchWithAuth()->get('/orders', [
                'per_page' =>  $setting->total,
                'status' => ['processing', 'completed']
            ]);

            if ($response->failed()) {
                return response([
                    'success' => false,
                    'message' => 'Error fetching orders'
                ], 400);
            }

            $orders = $response->json();
        }

        return response()->json([
            'success' => true,
            'data' => $orders,
            'setting' => $setting,
        ]);
    }
}
