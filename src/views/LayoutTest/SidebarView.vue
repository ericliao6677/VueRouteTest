<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="p-3 bg-light">
    <div class="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
      <a
        href="/"
        class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-5 d-none d-sm-inline text-dark">Vue Router Test</span>
      </a>
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li class="nav-item">
          <RouterLink to="/layout">userinfo</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/layout/order">order</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/layout/product">product</RouterLink>
        </li>
      </ul>
      <hr />
      <div class="dropdown pb-4">
        <a
          href="#"
          class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="hugenerd"
            width="30"
            height="30"
            class="rounded-circle"
          />
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
