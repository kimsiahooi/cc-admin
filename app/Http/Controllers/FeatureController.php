<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Http\Request;

class FeatureController extends Controller
{
    public function index(Feature $feature)
    {
        return inertia($feature->inertia_view, [
            'slug' => $feature->slug,
            'data' => json_decode($feature->data)
        ]);
    }

    public function update(Feature $feature, Request $request)
    {
        $validatedData = $request->validate([
            'total' => 'required|integer|min:10|max:100',
            'loop_time' => 'required|integer|min:1000',
            'real_data' => 'required|boolean',
            'is_active' => 'required|boolean',
        ]);

        $feature->data = $validatedData;
        $feature->save();

        return back()->with('success', 'Data updated successfully.');
    }
}
