<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <a :href="`https://creamcouch.com/wp-admin/post.php?post=${orderId}&action=edit`" target="_blank">
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
import { SquareArrowOutUpRight } from 'lucide-vue-next';

defineProps<{
  orderId: number;
}>();
</script>
