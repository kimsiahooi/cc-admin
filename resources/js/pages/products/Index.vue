<script setup lang="ts">
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
    on_sale: '' | '0' | '1';
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
                        <SelectItem value="private">Private</SelectItem>
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
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">On Sale</Label>
                  <Select v-model="searchForm.on_sale" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select On Sale" />
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
                  <Label for="search">Min. Price</Label>
                  <Input placeholder="Min. Price" v-model="searchForm.min_price" :disabled="searchForm.processing" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Max. Price</Label>
                  <Input placeholder="Max. Price" v-model="searchForm.max_price" :disabled="searchForm.processing" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Stock Status</Label>
                  <Select v-model="searchForm.stock_status" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select Stock Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="instock">In Stock</SelectItem>
                        <SelectItem value="outofstock">Out of Stock</SelectItem>
                        <SelectItem value="onbackorder">On Back Order</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label for="search">Order By:</Label>
                  <Select v-model="searchForm.orderby" :disabled="searchForm.processing">
                    <SelectTrigger class="min-w-20">
                      <SelectValue placeholder="Select Order By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="modified">Modified</SelectItem>
                        <SelectItem value="id">ID</SelectItem>
                        <SelectItem value="title">Title</SelectItem>
                        <SelectItem value="slug">Slug</SelectItem>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="menu_order">Menu Order</SelectItem>
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
          <TableCaption>{{ products?.length ? 'A list of your recent products.' : 'No product found.' }}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="text-center">ID</TableHead>
              <TableHead class="text-center">Image</TableHead>
              <TableHead class="text-center">Name</TableHead>
              <TableHead class="text-center">Type</TableHead>
              <TableHead class="text-center">Status</TableHead>
              <TableHead class="text-center">Price</TableHead>
              <TableHead class="text-center">On Sale</TableHead>
              <TableHead class="text-center">Stock Status</TableHead>
              <TableHead class="text-center">Date Created</TableHead>
              <TableHead class="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="product in products" :key="product.id">
              <TableCell class="text-center">{{ product.id }}</TableCell>
              <TableCell class="text-center">
                <img
                  v-if="product.images?.length && product.images[0].src"
                  :src="product.images[0].src"
                  :alt="product.name || product.id.toString()"
                  class="inline-block size-8 object-cover"
                />
              </TableCell>
              <TableCell class="text-center">{{ product.name }}</TableCell>
              <TableCell class="text-center">{{ product.type }}</TableCell>
              <TableCell class="text-center">{{ product.status }}</TableCell>
              <TableCell class="text-center">{{ product.price }}</TableCell>
              <TableCell class="text-center">{{ product.on_sale ? 'Yes' : 'No' }}</TableCell>
              <TableCell class="text-center">{{ product.stock_status }}</TableCell>
              <TableCell class="text-center">{{ dateFormat(product.date_created) }}</TableCell>
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
