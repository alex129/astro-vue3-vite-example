<script setup>
import ShowCounter from '@components/ShowCounter.vue';
import { useCounterStore } from '@stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div>
    Welcome to Vue with Astro
    <button @click="counterStore.counter++">Increment</button>
    <ShowCounter />
  </div>
</template>

<style scoped></style>
