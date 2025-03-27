<script setup lang="ts">
import OrderDetailsLink from '@/components/Customer/OrderDetailsLink.vue';
import ProductLink from '@/components/Product/ProductLink.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useDateFormat } from '@/composables/useDateFormat';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem, SharedData } from '@/types';
import type { Product } from '@/types/Product';
import { Head, usePage } from '@inertiajs/vue3';

const { product } = defineProps<{
  product?: Product;
}>();

const page = usePage<SharedData>();

const dateFormat = useDateFormat();

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Products',
    href: route('products.index'),
  },
  {
    title: product?.id.toString() || '',
    href: product?.id ? route('products.show', product.id) : '#',
  },
];
</script>

<template>
  <Head :title="`Product ID ${product?.id}`" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div v-if="product" class="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle class="space-x-2">
              <span>Product ID {{ product.id }}</span> <OrderDetailsLink :href="route('orders.index', { product_id: product.id })" />
              <ProductLink :product-id="product.id" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1">
                <label>Name:</label>
                <p>{{ product.name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Slug:</label>
                <div>
                  <a v-if="product.permalink" :href="product.permalink" target="_blank" class="underline">
                    {{ product.slug }}
                  </a>
                  <p v-else-if="product.slug">{{ product.slug }}</p>
                  <p v-else>-</p>
                </div>
              </div>
              <div class="space-y-1">
                <label>Date Created:</label>
                <p>{{ dateFormat(product.date_created) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Modified:</label>
                <p>{{ dateFormat(product.date_modified) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Type:</label>
                <p class="capitalize">{{ product.type || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Status:</label>
                <p class="capitalize">{{ product.status || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Featured:</label>
                <p>{{ product.featured ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Sku:</label>
                <p>{{ product.sku }}</p>
              </div>
              <div class="space-y-1">
                <label>Price:</label>
                <p>{{ product.price || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Regular Price:</label>
                <p>{{ product.regular_price || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Sale Price:</label>
                <p>{{ product.sale_price || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date On Sale From:</label>
                <p>{{ dateFormat(product.date_on_sale_from) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date On Sale To:</label>
                <p>{{ dateFormat(product.date_on_sale_to) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>On Sale:</label>
                <p>{{ product.on_sale === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Purchasable:</label>
                <p>{{ product.purchasable === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Total Sales:</label>
                <p>{{ product.total_sales || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Tax Status:</label>
                <p class="capitalize">{{ product.tax_status || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Tax Class:</label>
                <p>{{ product.tax_class || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Manage Stock:</label>
                <p>{{ product.manage_stock === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Stock Quantity:</label>
                <p>{{ product.stock_quantity || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Stock Status:</label>
                <p>
                  {{
                    product.stock_status === 'instock'
                      ? 'In Stock'
                      : product.stock_status === 'outofstock'
                        ? 'Out of Stock'
                        : product.stock_status === 'onbackorder'
                          ? 'On Back Order'
                          : product.stock_status
                  }}
                </p>
              </div>
              <div class="space-y-1">
                <label>Backorders:</label>
                <p class="capitalize">{{ product.backorders || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Backorders Allowed:</label>
                <p>{{ product.backorders_allowed === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Backordered:</label>
                <p>{{ product.backordered === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Sold Individually:</label>
                <p>{{ product.sold_individually === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Weight:</label>
                <p>{{ product.weight || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Dimensions:</label>
                <p>Length: {{ product.dimensions?.length || '-' }}</p>
                <p>Width: {{ product.dimensions?.width || '-' }}</p>
                <p>Height: {{ product.dimensions?.height || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Shipping Required:</label>
                <p>{{ product.shipping_required === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Shipping Taxable:</label>
                <p>{{ product.shipping_taxable === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Shipping Class:</label>
                <p>{{ product.shipping_class || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Reviews Allowed:</label>
                <p>{{ product.reviews_allowed === true ? 'Yes' : 'No' }}</p>
              </div>
              <div class="space-y-1">
                <label>Average Rating:</label>
                <p>{{ product.average_rating || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Rating Count:</label>
                <p>{{ product.rating_count || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Purchase Note:</label>
                <p>{{ product.purchase_note || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Categories:</label>
                <p>{{ product.categories?.length ? product.categories.map((category) => category.name).join(', ') : '-' }}</p>
              </div>
              <template v-if="product.attributes?.length">
                <div v-for="(attribute, index) in product.attributes" :key="attribute.id || index" class="space-y-1">
                  <label>{{ attribute.name }}:</label>
                  <p>{{ attribute.options?.join(', ') }}</p>
                </div>
              </template>
            </div>
          </CardContent>
        </Card>
        <template v-if="product.images?.length">
          <Separator />
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <div v-for="(image, index) in product.images" :key="image.id || index">
                  <img v-if="image.src" :src="image.src" :alt="image.alt || index.toString()" class="aspect-square w-full object-cover" />
                </div>
              </div>
            </CardContent>
          </Card>
        </template>
        <template v-if="product.short_description">
          <Separator />
          <Card>
            <CardHeader>
              <CardTitle>Short Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p v-html="product.short_description"></p>
            </CardContent>
          </Card>
        </template>
        <template v-if="product.description">
          <Separator />
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p v-html="product.description"></p>
            </CardContent>
          </Card>
        </template>
      </div>
    </div>
  </AppLayout>
</template>
