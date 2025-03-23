<script setup lang="ts">
import CustomerLink from '@/components/Customer/CustomerLink.vue';
import OrderDetailsLink from '@/components/Customer/OrderDetailsLink.vue';
import PayingCustomerStatus from '@/components/Customer/PayingCustomerStatus.vue';
import ViewLink from '@/components/General/ViewLink.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDateFormat } from '@/composables/useDateFormat';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import type { Product, ProductStatus, ProductStockStatus, ProductType } from '@/types/Product';
import { Head, router, useForm } from '@inertiajs/vue3';

const { filter_config } = defineProps<{
  products?: Product[];
  filter_config: {
    product_id: string;
    status: ProductStatus;
    type: ProductType;
    sku: string;
    featured: '' | '0' | '1';
    category: string;
    on_sale: '' | boolean;
    min_price: string;
    max_price: string;
    stock_status: ProductStockStatus;
    entries: string;
    page: string;
    orderby: 'date' | 'modified' | 'id' | 'title' | 'slug' | 'price' | 'popularity' | 'rating' | 'menu_order';
  };
}>();

const dateFormat = useDateFormat();

const searchForm = useForm({
  entries: +filter_config.entries,
  page: +filter_config.page,
  orderby: filter_config.orderby,
  product_id: filter_config.product_id,
  status: filter_config.status,
  type: filter_config.type,
  sku: filter_config.sku,
  featured: filter_config.featured,
  category: filter_config.category,
  on_sale: filter_config.on_sale,
  min_price: filter_config.min_price,
  max_price: filter_config.max_price,
  stock_status: filter_config.stock_status,
});

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Products',
    href: route('products.index'),
  },
];

const entriesHandler = () => {
  resetPage();
  submit();
};

const prevHandler = () => {
  if (searchForm.page > 1) {
    searchForm.page--;
  }

  submit();
};

const nextHandler = () => {
  searchForm.page++;

  submit();
};

const resetPage = () => {
  searchForm.page = 1;
};

const filter = () => {
  resetPage();
  submit();
};

const reset = () => {
  router.visit(route('products.index'));
};

const submit = () => {
  searchForm.get(route('products.index'), {
    preserveState: true,
    preserveScroll: true,
  });
};
</script>

<template>
  <Head title="Products" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div>
        <Card>
          <form @submit.prevent="filter">
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Product ID</Label>
                  <Input id="product_id" placeholder="Product ID" v-model="searchForm.product_id" :disabled="searchForm.processing" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Status</Label>
                  <Select v-model="searchForm.status" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="private">private</SelectItem>
                        <SelectItem value="publish">Publish</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Type</Label>
                  <Select v-model="searchForm.type" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="simple">Simple</SelectItem>
                        <SelectItem value="grouped">Grouped</SelectItem>
                        <SelectItem value="external">External</SelectItem>
                        <SelectItem value="variable">Variable</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Sku</Label>
                  <Input placeholder="Sku" v-model="searchForm.sku" :disabled="searchForm.processing" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Featured</Label>
                  <Select v-model="searchForm.featured" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select Featured" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">Yes</SelectItem>
                        <SelectItem value="0">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Category ID</Label>
                  <Input placeholder="Category ID" v-model="searchForm.category" :disabled="searchForm.processing" />
                </div>
              </div>
            </CardContent>
            <CardFooter class="flex justify-end gap-2 px-6 pb-6">
              <Button type="button" @click="reset" :disabled="searchForm.processing" variant="outline">Reset</Button>
              <Button type="submit" :disabled="searchForm.processing">Filter</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      <Separator class="my-2" />
      <div>
        <Table class="min-w-max">
          <TableCaption>{{ customers?.length ? 'A list of your recent customers.' : 'No customer found.' }}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="text-center">ID</TableHead>
              <TableHead class="text-center">Avatar</TableHead>
              <TableHead class="text-center">Name</TableHead>
              <TableHead class="text-center">Email</TableHead>
              <TableHead class="text-center">Is Paying Customer</TableHead>
              <TableHead class="text-center">Date Created</TableHead>
              <TableHead class="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="customer in customers" :key="customer.id">
              <TableCell class="text-center">{{ customer.id }}</TableCell>
              <TableCell class="text-center">
                <img
                  v-if="customer.avatar_url"
                  :src="customer.avatar_url"
                  :alt="customer.username || customer.id.toString()"
                  class="inline-block size-8 rounded-full object-cover"
                />
              </TableCell>
              <TableCell class="text-center">{{ customer.first_name }} {{ customer.last_name }}</TableCell>
              <TableCell class="text-center">{{ customer.email }}</TableCell>
              <TableCell class="text-center"><PayingCustomerStatus :-is-paying-customer="customer.is_paying_customer" /></TableCell>
              <TableCell class="text-center">{{ dateFormat(customer.date_created) }}</TableCell>
              <TableCell class="text-center">
                <div class="space-x-3">
                  <ViewLink :href="route('customers.show', customer.id)" />
                  <OrderDetailsLink :href="route('orders.index', { customer_id: customer.id })" />
                  <CustomerLink :customer-id="customer.id" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <p class="flex items-center gap-2">
            Show
            <Select v-model="searchForm.entries" @update:model-value="entriesHandler" :disabled="searchForm.processing">
              <SelectTrigger class="min-w-20">
                <SelectValue placeholder="Select Entries" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem :value="10">10</SelectItem>
                  <SelectItem :value="25">25</SelectItem>
                  <SelectItem :value="50">50</SelectItem>
                  <SelectItem :value="100">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            Entries
          </p>
        </div>
        <div class="flex items-center gap-2">
          <Button @click="prevHandler" :disabled="searchForm.page <= 1 || searchForm.processing">Previous</Button>
          <Button @click="nextHandler" :disabled="searchForm.processing">Next</Button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
