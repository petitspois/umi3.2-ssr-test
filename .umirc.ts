import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    //devServerRender:true
  },
  dva: {
    //hmr: true,
  },
  dynamicImport: {},

  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',

      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
        {
          path: '/page2',
          component: '@/pages/page2',
        },
        {
          path: '/page3',
          component: '@/pages/page3',
        },
      ],
    },
  ],
});
