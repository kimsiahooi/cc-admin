<template>
  <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
defineProps<{
  errorMessage?: string;
}>();
</script>
