<script setup lang="ts">
import { useToast } from '@/components/ui/toast';
import Toaster from '@/components/ui/toast/Toaster.vue';
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { BreadcrumbItemType, SharedData } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { computed, watch } from 'vue';

interface Props {
  breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
});

const page = usePage<SharedData>();
const { toast } = useToast();

const flashMessage = computed(() => page.props.flash);

watch(
  flashMessage,
  (newFlashMessage) => {
    if (newFlashMessage.error) {
      toast({
        description: newFlashMessage.error,
        variant: 'destructive',
      });
    }

    if (newFlashMessage.success) {
      toast({
        description: newFlashMessage.success,
        variant: 'success',
      });
    }
  },
  { deep: true, immediate: true },
);
</script>

<template>
  <AppLayout :breadcrumbs="breadcrumbs">
    <slot />
    <Toaster />
  </AppLayout>
</template>
