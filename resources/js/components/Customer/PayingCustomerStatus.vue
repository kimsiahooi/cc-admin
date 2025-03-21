<template>
  <Badge v-if="IsPayingCustomer" class="bg-success text-success-foreground" :class="className">Yes</Badge>
  <Badge v-else :class="className" variant="destructive">No</Badge>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import type { IsPayingCustomer } from '@/types/Customer';

defineProps<{
  IsPayingCustomer: IsPayingCustomer | undefined;
}>();

const className = 'capitalize';
</script>
