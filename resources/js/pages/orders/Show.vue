<script setup lang="ts">
import OrderLink from '@/components/Order/OrderLink.vue';
import OrderStatus from '@/components/Order/OrderStatus.vue';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDateFormat } from '@/composables/useDateFormat';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import type { Order } from '@/types/Order';
import { Head, Link } from '@inertiajs/vue3';

const { order } = defineProps<{
  order?: Order;
}>();

const dateFormat = useDateFormat();

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Orders',
    href: route('orders.index'),
  },
  {
    title: order?.id.toString() || '',
    href: order?.id ? route('orders.show', order.id) : '#',
  },
];
</script>

<template>
  <Head :title="`Order ID ${order?.id}`" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div v-if="order" class="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle class="space-x-2">
              <span>Order ID {{ order.id }}</span> <OrderLink class="ml-2" :order-id="order.id" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1">
                <label>Status:</label>
                <p>
                  <OrderStatus v-if="order.status" :status="order.status" />
                  <span v-else>-</span>
                </p>
              </div>
              <div class="space-y-1">
                <label>Currency:</label>
                <p>{{ order.currency || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Created:</label>
                <p>{{ dateFormat(order.date_created) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Modified:</label>
                <p>{{ dateFormat(order.date_modified) || '-' }}</p>
              </div>
              <div v-if="order.coupon_lines?.length" class="space-y-1">
                <label>Coupon(s):</label>
                <div class="flex flex-wrap items-center gap-2">
                  <Badge v-for="coupon in order.coupon_lines" :key="coupon.id">{{ coupon.code }}</Badge>
                </div>
              </div>
              <div class="space-y-1">
                <label>Discount:</label>
                <p>{{ order.discount_total || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Shipping:</label>
                <p>{{ order.shipping_total || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Tax:</label>
                <p>{{ order.total_tax || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Total:</label>
                <p>
                  <strong>{{ order.total || '-' }}</strong>
                </p>
              </div>
              <div class="space-y-1">
                <label>Customer ID:</label>
                <div>
                  <Link v-if="order.customer_id" :href="route('customers.show', order.customer_id)" class="underline">{{ order.customer_id }}</Link>
                  <p v-else>-</p>
                </div>
              </div>
              <div class="space-y-1">
                <label>Customer Note:</label>
                <p>{{ order.customer_note || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Payment Method:</label>
                <p>{{ order.payment_method_title || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Paid:</label>
                <p>{{ dateFormat(order.date_paid) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Completed:</label>
                <p>{{ dateFormat(order.date_completed) || '-' }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table class="min-w-max">
              <TableHeader>
                <TableRow>
                  <TableHead class="text-center">Product ID</TableHead>
                  <TableHead class="text-center">Name</TableHead>
                  <TableHead class="text-center">Quantity</TableHead>
                  <TableHead class="text-center">Price</TableHead>
                  <TableHead class="text-center">Tax</TableHead>
                  <TableHead class="text-center">Total (After Discount)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="product in order.line_items" :key="product.id">
                  <TableCell class="text-center">{{ product.product_id }}</TableCell>
                  <TableCell class="text-center">
                    <div class="inline-flex items-center justify-center gap-4">
                      <img
                        v-if="product.image?.src"
                        :src="product.image.src"
                        :alt="product.name || product.id?.toString()"
                        class="inline-block size-8 object-cover"
                      />
                      <span>{{ product.name }}</span>
                    </div>
                  </TableCell>
                  <TableCell class="text-center">{{ product.quantity }}</TableCell>
                  <TableCell class="text-center">{{ product.price }}</TableCell>
                  <TableCell class="text-center">{{ product.total_tax }}</TableCell>
                  <TableCell class="text-center">{{ product.total }}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1">
                <label>First Name:</label>
                <p>{{ order.billing?.first_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Last Name:</label>
                <p>{{ order.billing?.last_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Company:</label>
                <p>{{ order.billing?.company || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 1:</label>
                <p>{{ order.billing?.address_1 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 2:</label>
                <p>{{ order.billing?.address_2 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>City:</label>
                <p>{{ order.billing?.city || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>State:</label>
                <p>{{ order.billing?.state || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Postcode:</label>
                <p>{{ order.billing?.postcode || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Country:</label>
                <p>{{ order.billing?.country || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Email:</label>
                <p>{{ order.billing?.email || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Phone:</label>
                <p>{{ order.billing?.phone || '-' }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle>Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1">
                <label>First Name:</label>
                <p>{{ order.shipping?.first_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Last Name:</label>
                <p>{{ order.shipping?.last_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Company:</label>
                <p>{{ order.shipping?.company || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 1:</label>
                <p>{{ order.shipping?.address_1 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 2:</label>
                <p>{{ order.shipping?.address_2 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>City:</label>
                <p>{{ order.shipping?.city || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>State:</label>
                <p>{{ order.shipping?.state || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Postcode:</label>
                <p>{{ order.shipping?.postcode || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Country:</label>
                <p>{{ order.shipping?.country || '-' }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
