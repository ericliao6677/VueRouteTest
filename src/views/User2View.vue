<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = ref(route.params.id);
// const userId = computed({
//   get: () => id.value,
//   set: (val) => {
//     id.value = val;
//   }
// });
</script>
<template>
  <div>
    <h3>
      this is user page <span class="text-danger">userId: {{ id }}</span>
    </h3>
    <input type="text" v-model="id" />
    <br />
    <RouterLink :to="`/users/${id}/profile`">profile</RouterLink>
    &ensp;
    <RouterLink :to="`/users/${id}/post`">post</RouterLink>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style></style>
