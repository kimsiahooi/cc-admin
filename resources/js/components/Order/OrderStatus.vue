<template v-if="order.status">
  <Badge v-if="status === 'failed' || status === 'cancelled' || status === 'trash' || status === 'refunded'" variant="destructive" :class="className">
    {{ status }}
  </Badge>
  <Badge v-else-if="status === 'completed'" class="bg-success text-success-foreground" :class="className">{{ status }}</Badge>
  <Badge v-else :class="className">{{ status }}</Badge>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import type { OrderStatus } from '@/types/Order';

defineProps<{
  status: OrderStatus | undefined;
}>();

const className = 'capitalize';
</script>
