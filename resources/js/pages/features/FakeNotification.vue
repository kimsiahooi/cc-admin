<script setup lang="ts">
import ErrorMessage from '@/components/Form/ErrorMessage.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/vue3';

const { slug, data } = defineProps<{
  slug: string;
  data: {
    total: number;
    loop_time: number;
    real_data: boolean;
    is_active: boolean;
  };
}>();

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Fake Notifications',
    href: route('features.index', { feature: 'fake-notifications' }),
  },
];

const form = useForm({
  total: data.total,
  loop_time: data.loop_time,
  real_data: data.real_data,
  is_active: data.is_active,
});

const update = () => form.put(route('features.update', { feature: slug }));
</script>

<template>
  <Head title="Fake Notifications" />

  <AppLayout :breadcrumbs="breadcrumbs">
    <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
      <div class="space-y-5">
        <Card>
          <form @submit.prevent="update">
            <CardHeader>
              <CardTitle>Fake Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col space-y-1.5">
                  <Label>Total Orders</Label>
                  <Input placeholder="Total Orders" v-model="form.total" :disabled="form.processing" />
                  <ErrorMessage :error-message="form.errors.total" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label>Loop Time</Label>
                  <Input placeholder="Loop Time" v-model="form.loop_time" :disabled="form.processing" />
                  <ErrorMessage :error-message="form.errors.loop_time" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label>Real Data</Label>
                  <div class="flex min-h-10 items-center space-x-2">
                    <Switch v-model="form.real_data" />
                  </div>
                  <ErrorMessage :error-message="form.errors.real_data" />
                </div>
                <div class="flex flex-col space-y-1.5">
                  <Label>Is Active</Label>
                  <div class="flex min-h-10 items-center space-x-2">
                    <Switch v-model="form.is_active" />
                  </div>
                  <ErrorMessage :error-message="form.errors.is_active" />
                </div>
              </div>
            </CardContent>
            <CardFooter class="flex gap-2 px-6 pb-6">
              <Button type="submit" :disabled="form.processing">Submit</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>
