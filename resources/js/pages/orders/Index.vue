<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import type { Order } from '@/types/Order';
import { Head, router, useForm } from '@inertiajs/vue3';
import { format } from 'date-fns';
import { Eye } from 'lucide-vue-next';

defineProps<{
  orders: Order[];
}>();

const searchForm = useForm({
  entries: 10,
  page: 1,
  order_id: '',
  status: 'any',
});

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Orders',
    href: route('orders.index'),
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
  router.visit(route('orders.index'));
};

const submit = () => {
  searchForm.get(route('orders.index'), {
    preserveState: true,
    preserveScroll: true,
  });
};
</script>

<template>
  <Head title="Orders" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div>
        <Card>
          <form @submit.prevent="filter">
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Order ID</Label>
                  <Input id="order_id" placeholder="Order ID" v-model="searchForm.order_id" :disabled="searchForm.processing" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="status">Status</Label>
                  <Select v-model="searchForm.status" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select Entries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                        <SelectItem value="refunded">Refunded</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                        <SelectItem value="trash">Trash</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
          <TableCaption>{{ orders.length ? 'A list of your recent orders.' : 'No order found.' }}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="text-center">ID</TableHead>
              <TableHead class="text-center">Status</TableHead>
              <TableHead class="text-center">Discount</TableHead>
              <TableHead class="text-center">Shipping</TableHead>
              <TableHead class="text-center">Tax</TableHead>
              <TableHead class="text-center">Total</TableHead>
              <TableHead class="text-center">Payment Method</TableHead>
              <TableHead class="text-center">Date Created</TableHead>
              <TableHead class="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="order in orders" :key="order.id">
              <TableCell class="text-center">{{ order.id }}</TableCell>
              <TableCell class="text-center capitalize">
                <template v-if="order.status">
                  <Badge
                    v-if="order.status === 'failed' || order.status === 'cancelled' || order.status === 'trash' || order.status === 'refunded'"
                    variant="destructive"
                  >
                    {{ order.status }}
                  </Badge>
                  <Badge v-else-if="order.status === 'completed'" class="text-success-foreground bg-success">{{ order.status }}</Badge>
                  <Badge v-else>{{ order.status }}</Badge>
                </template>
              </TableCell>
              <TableCell class="text-center">{{ order.discount_total }}</TableCell>
              <TableCell class="text-center">{{ order.shipping_total }}</TableCell>
              <TableCell class="text-center">{{ order.total_tax }}</TableCell>
              <TableCell class="text-center font-bold text-blue-500">{{ order.total }}</TableCell>
              <TableCell class="text-center">{{ order.payment_method }}</TableCell>
              <TableCell class="text-center">{{ order.date_created && format(order.date_created, 'd MMM yyyy hh:mmaaa') }}</TableCell>
              <TableCell class="text-center">
                <Eye class="inline-block size-5 cursor-pointer" />
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
