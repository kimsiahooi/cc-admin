<?php

use Illuminate\Support\Facades\Http;

function fetchWithAuth()
{
    return Http::baseUrl(env('VITE_WORDPRESS_DOMAIN_URL') . '/wp-json/wc/v3')->withBasicAuth(env('VITE_WORDPRESS_CONSUMER_KEY'), env('VITE_WORDPRESS_CONSUMER_SECRET'));
}
