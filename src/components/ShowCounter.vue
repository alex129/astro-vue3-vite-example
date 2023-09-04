<script setup>
import { useCounterStore } from '@stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div>Counter {{ counterStore.counter }}</div>
</template>

<style scoped></style>
