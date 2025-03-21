<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <a :href="`${page.props.domain_api_url}/wp-admin/post.php?post=${orderId}&action=edit`" target="_blank">
          <SquareArrowOutUpRight class="inline-block size-5 cursor-pointer" />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>Website Link</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { SharedData } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { SquareArrowOutUpRight } from 'lucide-vue-next';

const page = usePage<SharedData>();

defineProps<{
  orderId: number;
}>();
</script>
