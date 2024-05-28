<script setup>
import { computed, ref } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
// TODO:useRoute()
//筆記: 使用 useRoute 函數來訪問當前路由的相關信息，包括 fullPath 屬性
const route = useRoute();
const router = useRouter();
//利用computed監聽route變化
const fullpath = computed(() => route.fullPath);
const id = ref(2);

const toUserPage = () => {
  //TODO 編程式導行
  //router.push('/users/123');
  // 命名的路由，並加上参數，讓路由建立 url
  //router.push({ name: 'users', params: { id: 'eduardo' } });
  // 带查詢参數，结果是 /register?plan=private
  //router.push({ path: '/register', query: { plan: 'private' } });
  //router.push({ name: 'register', params: { name: 'private' } });
  // 帶 hash，结果是 /about#team
  //router.push({ path: '/register', hash: '#team' });

  //TODO 編程式導行: 如果提供了path，params會被忽略
  // `params` 不能与 `path` 一起使用
  //router.push({ path: '/user', params: { username: 'test' } }); // -> /user

  //TODO 編程式導行: 替換當前位置
  //router.push({ path: '/home', replace: true });
  //router.replace({ path: '/home' });

  //TODO 編程式導行: 橫跨歷史
  router.go(1);
  //router.go(-1);
};
</script>

<template>
  <div class="container row">
    <router-view class="col-2" name="Sidebar"></router-view>
    <div class="col-10">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">router test</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              &ensp;
              <li class="nav-item">
                <RouterLink to="/about">About</RouterLink>
              </li>
              &ensp;
              <li class="nav-item">
                <!--TODO 不顯示巢狀路由可命名父路由，但重載後將始終顯示嵌套的子路由-->
                <RouterLink :to="{ name: 'user-parent', params: { id } }"
                  >不顯示預設嵌套路由</RouterLink
                >
              </li>
              &ensp;
              <!--TODO 命名路由-->
              <!--筆記 命名路由優點
                  1. 沒有硬編碼的URL
                  2. params的自動編碼/解碼。
                  3. 防止你在url 中出現打字錯誤。
                  4. 繞過路徑排序（如顯示一個）-->
              <li class="nav-item">
                <RouterLink :to="{ name: 'users', params: { username: 'eric' } }"
                  >命名路由</RouterLink
                >
              </li>
              &ensp;
              <button class="btn btn-primary" @click="toUserPage">To User Page</button>
            </ul>
          </div>
        </div>
      </nav>
      <h5 class="mt-2">current Route: {{ fullpath }}</h5>
      <hr />
      <!--default-->
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
