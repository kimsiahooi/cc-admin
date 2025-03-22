<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Link :href="href">
          <Package2 class="inline-block size-5 cursor-pointer" />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>Show Orders</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from '@inertiajs/vue3';
import { Package2 } from 'lucide-vue-next';

defineProps<{
  href: string;
}>();
</script>
