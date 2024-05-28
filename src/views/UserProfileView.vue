<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const routePara = computed(() => route.params);
</script>
<template>
  <div class="m-5 border border-dark">
    <h3>
      this is user profile page <span class="text-danger">userId: {{ routePara.id }}</span>
    </h3>
  </div>
</template>
<style></style>
