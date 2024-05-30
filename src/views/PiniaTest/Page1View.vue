<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia/dist/pinia.prod.cjs';
const store = useCounterStore();

//TODO 從Store 解構
//筆記: 會挑過所有action或非響應式屬性(ref or reactive)
const { count, doubleCount } = storeToRefs(store);
//action可直接接解構
const { increment } = store;
</script>
<template>
  <div class="d-flex justify-content-center">
    <input type="text" v-model="count" />
    <button @click="increment">+</button>
    <button @click="store.reset">!!!!!</button>
    <div>
      <span>value: {{ count }}</span>
      &ensp;
      <span>double value: {{ doubleCount }}</span>
    </div>
  </div>
</template>
<style></style>
