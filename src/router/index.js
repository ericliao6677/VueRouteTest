import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        default: () => import('../views/HomeView.vue'),
        Nav: () => import('../views/NavView.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
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
      path: '/users/:id(\\d+)',
      //TODO 不顯示巢狀路由可命名父路由，但重載後將始終顯示嵌套的子路由
      name: 'user-parent',
      component: () => import('../views/User2View.vue'),
      children: [
        {
          //TODO 嵌套的命名路由
          //筆記: 因為子路由的路徑是空字串，所以任何匹配到 /user/:id 的路徑都會載入這個子路由。
          path: '',
          name: 'userDefault',
          component: () => import('../views/UserHomeView.vue')
        },
        {
          path: 'profile',
          component: () => import('../views/UserProfileView.vue')
        },
        {
          path: 'post',
          component: () => import('../views/UserPostView.vue')
        }
      ]
    },
    //TODO 命名路由
    {
      path: '/users/:username',
      name: 'users', //設定名稱
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    //TODO 嵌套命名視圖
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/settings/SettingVIew.vue'),
      children: [
        {
          path: 'email',
          name: 'settingEmail',
          components: {
            default: () => import('../views/settings/EmailView.vue'),
            helper: () => import('../views/RegisterView.vue')
          }
        },
        {
          path: 'profile',
          name: 'settingProfile',
          components: {
            default: () => import('../views/settings/ProfileView.vue'),
            helper: () => import('../views/settings/ProfileView2.vue')
          }
        }
      ]
    },
    //TODO 重定向和別名
    {
      path: '/search/:searchText',
      redirect: (to) => {
        // 方法接收目标路由作为参数
        // return 重定向的字符串路径/路径对象
        return { path: '/search', query: { q: to.params.searchText } };
      }
    },
    //TODO 實作layout
    {
      // 詳細說明: VueRouterNote.md
      path: '/layout',
      component: () => import('../views/LayoutTest/LayoutView.vue'),
      children: [
        {
          //因為path為空
          path: '',
          components: {
            default: () => import('../views/LayoutTest/LayoutDefaultView.vue'),
            LayoutNav: () => import('../views/LayoutTest/NavView.vue'),
            Sidebar: () => import('../views/LayoutTest/SidebarView.vue')
          },
          children: [
            {
              path: '',
              component: () => import('../views/LayoutTest/ContentPages/UserInfoView.vue')
            },
            {
              path: 'order',
              component: () => import('../views/LayoutTest/ContentPages/OrderView.vue')
            },
            {
              path: 'product',
              component: () => import('../views/LayoutTest/ContentPages/ProductView.vue')
            }
          ]
        }
      ]
    }
  ]
});

export default router;
