<script setup>
import ShowCounter from '@components/ShowCounter.vue';
import { useCounterStore } from '@stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md">
        <!-- Welcome Message -->
        <h1 class="text-2xl font-semibold mb-4">Welcome to Vue with Astro</h1>
        <div class="flex items-center gap-5">            
            <button @click="counterStore.counter++" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200" id="incrementButton">Increment</button>         
            <ShowCounter />
        </div>
        
    </div>
  </div>
</template>

<style scoped></style>
