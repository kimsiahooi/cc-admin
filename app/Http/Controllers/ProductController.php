<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {

        $product_id = $request->input('product_id') ?? null;
        $status = $request->input('status') ?? 'any';
        $type = $request->input('type') ?? null;
        $sku = $request->input('sku') ?? null;
        $featured = $request->input('featured') ?? null;
        $category = $request->input('category') ?? null;
        $on_sale = $request->input('on_sale') ?? null;
        $min_price = $request->input('min_price') ?? null;
        $max_price = $request->input('max_price') ?? null;
        $stock_status = $request->input('stock_status') ?? null;
        $entries = $request->input('entries') ?? 10;
        $page = $request->input('page') ?? 1;
        $orderby = $request->input('orderby') ?? 'date';

        $filter_config = [
            'product_id' => $product_id ?? '',
            'status' => $status,
            'type' => $type ?? '',
            'sku' => $sku ?? '',
            'featured' => $featured ?? '',
            'category' => $category ?? '',
            'on_sale' => $on_sale ?? '',
            'min_price' => $min_price ?? '',
            'max_price' => $max_price ?? '',
            'entries' => $entries,
            'page' => $page,
            'orderby' => $orderby,
        ];

        $response = fetchWithAuth()->get('/products', [
            'include' => $product_id,
            'status' => $status,
            'type' => $type,
            'sku' => $sku,
            'featured' => $featured,
            'category' => $category,
            'on_sale' => $on_sale,
            'min_price' => $min_price,
            'max_price' => $max_price,
            'stock_status' => $stock_status,
            'per_page' => $entries,
            'page' => $page,
            'orderby' => $orderby,
        ]);

        if ($response->failed()) {
            return inertia('products/Index', [
                'filter_config' => $filter_config
            ])->with('flash.error', 'Error fetching products');
        }

        return inertia('products/Index', [
            'products' => $response->json(),
            'filter_config' => $filter_config
        ]);
    }
}
