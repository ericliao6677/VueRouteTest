<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userId = computed(() => route.params);
</script>
<template>
  <div>
    <h3 class="text-primary">this is user page</h3>
    <h5>
      User Id: <strong class="text-danger">{{ userId }}</strong>
    </h5>
  </div>
</template>

<style></style>
