### Vue Router 筆記

    {
      path: '/layout',
      component: () => import('../views/LayoutTest/LayoutView.vue'),
      children: [
        {
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

###### 詳細說明

1. 父路由 /layout:

   - 當訪問 /layout 時，會動態加載 LayoutView.vue 作為主佈局組件。

2. 第一層子路由 '':

   - 因為 path 為空，所以這個路由會匹配 /layout 路徑。
   - 使用 components 屬性定義多個命名視圖：
     - default: 加載 LayoutDefaultView.vue 作為主要內容區域。
     - LayoutNav: 加載 NavView.vue 作為導航欄。
     - Sidebar: 加載 SidebarView.vue 作為側邊欄。

3. 第二層子路由:

   - path: '': 當路徑為 /layout 時，顯示 UserInfoView.vue。
   - path: 'order': 當路徑為 /layout/order 時，顯示 OrderView.vue。
   - path: 'product': 當路徑為 /layout/product 時，顯示 ProductView.vue。
