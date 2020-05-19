import { defineConfig } from 'umi';

export default defineConfig({
    ssr:{},
    dva:{
        hmr: true,
    },
    dynamicImport:{},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
