<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const pathMatch = computed(() => route.params.afterMember);
</script>
<template>
  <div>
    <h3>this is user genaric page</h3>
    <h3 class="text-danger">path match: {{ pathMatch }}</h3>
  </div>
</template>
<style></style>
