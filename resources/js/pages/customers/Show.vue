<script setup lang="ts">
import CustomerLink from '@/components/Customer/CustomerLink.vue';
import OrderDetailsLink from '@/components/Customer/OrderDetailsLink.vue';
import PayingCustomerStatus from '@/components/Customer/PayingCustomerStatus.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useDateFormat } from '@/composables/useDateFormat';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import type { Customer } from '@/types/Customer';
import { Head } from '@inertiajs/vue3';

const { customer } = defineProps<{
  customer?: Customer;
}>();

const dateFormat = useDateFormat();

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Customers',
    href: route('customers.index'),
  },
  {
    title: customer?.id.toString() || '',
    href: customer?.id ? route('customers.show', customer.id) : '#',
  },
];
</script>

<template>
  <Head :title="`Customer ID ${customer?.id}`" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div v-if="customer" class="space-y-5">
        <Card>
          <CardHeader>
            <CardTitle class="space-x-2">
              <span>Customer ID {{ customer.id }}</span> <OrderDetailsLink :href="route('orders.index', { customer_id: customer.id })" />
              <CustomerLink class="ml-2" :customer-id="customer.id" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div class="space-y-1">
                <label>Avatar:</label>
                <div>
                  <img
                    v-if="customer.avatar_url"
                    :src="customer.avatar_url"
                    :alt="customer.username || customer.id.toString()"
                    class="inline-block size-10 rounded-full object-cover"
                  />
                  <p v-else>-</p>
                </div>
              </div>
              <div class="space-y-1">
                <label>First Name:</label>
                <p>{{ customer.first_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Last Name:</label>
                <p>{{ customer.last_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Username:</label>
                <p>{{ customer.username || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Is Paying Customer:</label>
                <p><PayingCustomerStatus :-is-paying-customer="customer.is_paying_customer" /></p>
              </div>
              <div class="space-y-1">
                <label>Email:</label>
                <p>{{ customer.email || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Created:</label>
                <p>{{ dateFormat(customer.date_created) || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Date Modified:</label>
                <p>{{ dateFormat(customer.date_modified) || '-' }}</p>
              </div>
            </div>
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
                <p>{{ customer.billing?.first_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Last Name:</label>
                <p>{{ customer.billing?.last_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Company:</label>
                <p>{{ customer.billing?.company || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 1:</label>
                <p>{{ customer.billing?.address_1 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 2:</label>
                <p>{{ customer.billing?.address_2 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>City:</label>
                <p>{{ customer.billing?.city || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>State:</label>
                <p>{{ customer.billing?.state || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Postcode:</label>
                <p>{{ customer.billing?.postcode || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Country:</label>
                <p>{{ customer.billing?.country || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Email:</label>
                <p>{{ customer.billing?.email || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Phone:</label>
                <p>{{ customer.billing?.phone || '-' }}</p>
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
                <p>{{ customer.shipping?.first_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Last Name:</label>
                <p>{{ customer.shipping?.last_name || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Company:</label>
                <p>{{ customer.shipping?.company || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 1:</label>
                <p>{{ customer.shipping?.address_1 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Address 2:</label>
                <p>{{ customer.shipping?.address_2 || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>City:</label>
                <p>{{ customer.shipping?.city || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>State:</label>
                <p>{{ customer.shipping?.state || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Postcode:</label>
                <p>{{ customer.shipping?.postcode || '-' }}</p>
              </div>
              <div class="space-y-1">
                <label>Country:</label>
                <p>{{ customer.shipping?.country || '-' }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
