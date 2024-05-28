<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const pathMatch = computed(() => route.params.myPathMatch);
</script>
<template>
  <div>
    <h3>this is notfound page</h3>
    <h3>path match : {{ pathMatch }}</h3>
  </div>
</template>
<style></style>
