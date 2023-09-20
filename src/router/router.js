import {createRouter,   createWebHashHistory} from 'vue-router'

import PhotoMain from '@/views/PhotoMain.vue'
import PhotoShow from '@/views/PhotoShow.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path:'/',
            component:PhotoMain
        },
        {
            path: "/show/:id",
            component: PhotoShow,
            props:true
        }
    ]
})

export default router
