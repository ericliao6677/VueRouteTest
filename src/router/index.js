import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import User from '../views/User2View.vue';
import UserProfile from '../views/UserProfileView.vue';
import UserPost from '../views/UserPostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //TODO 動態路由匹配
    {
      path: '/users/:username/posts/:postId(\\d+)', //postId僅接受數字
      name: 'users',
      component: () => import('../views/UserView.vue')
    },
    //TODO 捕獲所有路由或 404 Not found 路由
    {
      //筆記: myPathMatch參數可以自己定義，使用route.params.myPathMatch
      //myPathMatch(.*)*，最後再加上*，route.params.myPathMatch會以陣列方式呈現
      path: '/:myPathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/user-:afterMember(.*)',
      component: () => import('../views/UserGenaricView.vue')
    },

    //TODO 路由的匹配語法
    {
      //筆記: 是數字=>NumerView.vue : 非數字=>StringView
      path: '/:orderId(\\d+)',
      component: () => import('../views/NumerView.vue')
    },
    {
      path: '/:productName',
      component: () => import('../views/StringView.vue')
    },
    //TODO Sensitive 與strict 路由配置
    //TODO 嵌套路由
    {
      // 僅匹配 /users/1，而不匹配以下情況：
      // 當 strict 為 true 時，不匹配 /users/1/
      // 當 sensitive 為 true 時，不匹配 /Users/1
      path: '/users/:id',
      component: User,
      sensitive: true,
      children: [
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'post',
          component: UserPost
        }
      ]
    }
  ]
});

export default router;
