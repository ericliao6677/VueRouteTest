<script setup></script>
<template>
  <div>
    <h3>This is Setting Page</h3>
    <hr />
    <div class="border border-dark">
      <router-view></router-view>
      <router-view name="helper"></router-view>
    </div>
  </div>
</template>
<style></style>
