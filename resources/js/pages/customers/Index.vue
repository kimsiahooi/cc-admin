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
import type { Customer } from '@/types/Customer';
import { Head, router, useForm } from '@inertiajs/vue3';

const { filter_config } = defineProps<{
  customers?: Customer[];
  filter_config: {
    customer_id: string;
    customer_email: string;
    entries: string;
    page: string;
  };
}>();

const dateFormat = useDateFormat();

const searchForm = useForm({
  entries: +filter_config.entries,
  page: +filter_config.page,
  customer_id: filter_config.customer_id,
  customer_email: filter_config.customer_email,
});

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Customers',
    href: route('customers.index'),
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
  router.visit(route('customers.index'));
};

const submit = () => {
  searchForm.get(route('customers.index'), {
    preserveState: true,
    preserveScroll: true,
  });
};
</script>

<template>
  <Head title="Customers" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div>
        <Card>
          <form @submit.prevent="filter">
            <CardHeader>
              <CardTitle>Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Customer ID</Label>
                  <Input id="customer_id" placeholder="Customer ID" v-model="searchForm.customer_id" :disabled="searchForm.processing" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Customer Email</Label>
                  <Input id="customer_email" placeholder="Customer Email" v-model="searchForm.customer_email" :disabled="searchForm.processing" />
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
