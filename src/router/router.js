import {createRouter,   createWebHashHistory} from 'vue-router'

import PhotoMain from '@/views/PhotoMain.vue'
import PhotoShow from '@/views/PhotoShow.vue'
import VideoShow from "@/views/VideoShow";

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
        },
        {
            path:"/video/show",
            component:VideoShow
        }
    ]
})

export default router
