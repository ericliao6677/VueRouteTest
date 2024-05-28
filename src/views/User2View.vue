<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const userId = computed(() => route.params.id);
const myUserId = ref();
</script>
<template>
  <div>
    <h3>
      this is user page <span class="text-danger">userId: {{ userId }}</span>
    </h3>
    <input type="text" v-model="myUserId" />
    <br />
    <RouterLink :to="`/users/${myUserId}/profile`">profile</RouterLink>
    &ensp;
    <RouterLink :to="`/users/${myUserId}/post`">post</RouterLink>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style></style>
