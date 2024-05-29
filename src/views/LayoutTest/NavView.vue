<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <nav class="p-3 navbar navbar-expand-lg navbar-light bg-light w-100">
    <div class="container-fluid">
      <span
        ><strong>當前路由: </strong><span class="text-danger"> {{ route.fullPath }}</span></span
      >
    </div>
  </nav>
</template>
<style></style>
