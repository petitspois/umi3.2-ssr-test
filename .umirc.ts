import { defineConfig } from 'umi';

export default defineConfig({
    ssr:{
        //devServerRender:true
    },
    dva:{
        //hmr: true,
    },
    dynamicImport:{},
    
    routes: [
        
        { 
            path: '/', 
            component: '../layouts/BasicLayout',

            routes : [
                {
                    path:"/test",
                    component: '@/pages/index' 
                }
            ]
            
        },
    ],
});
