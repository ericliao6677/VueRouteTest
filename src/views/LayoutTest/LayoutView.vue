<script setup></script>
<template>
  <div class="container">
    <div class="row">
      <router-view class="col-2" name="Sidebar"></router-view>
      <div class="col-10 p-0">
        <router-view name="LayoutNav"></router-view>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style></style>
