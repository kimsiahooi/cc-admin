<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Pest\Laravel\json;

class FeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create fake notification
        Feature::firstOrCreate(
            ['slug' => 'fake-notifications'],
            [
                'name' => 'Fake Notifications',
                'slug' => 'fake-notifications',
                'inertia_view' => 'features/FakeNotification',
                'data' => json_encode([
                    'total' => 20,
                    'loop_time' => 5000,
                    'real_data' => false,
                    'is_active' => false,
                ]),
            ],
        );
    }
}
