import {createRouter, createWebHashHistory} from 'vue-router'



const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:"/videoshow/:id",
            component:import("@/views/VideoShow.vue"),
            props:true
        },
        {
            path:"/video",
            component:import("@/views/VideoMain.vue")
        },
        {
            path:'/',
            component:import("@/views/PhotoMainCopy.vue")
        },
        {
            path: "/show/:id",
            component: import("@/views/PhotoShow.vue"),
            props:true
        },
        {
            //登陆
            path:"/login",
            component:import("@/views/LoginView"),
        },
        {
            //注册
            path:"/register",
            component:import("@/views/RegisterView")
        },
        {
            //找回密码
            path:"/retrievePassword",
            component:import("@/views/RetrievePasswordView")
        },
        {
            //找回密码
            path:"/error",
            component:import("@/components/ErrorComponents.vue")
            // component:import("@/components/AoTestCom.vue")
        },
        {
            //找回密码
            path:"/logout",
            component:import("@/views/LogoutView.vue")
        }
    ]
})

router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem("token");
    if(to.path === '/login' || to.path === '/register'|| to.path === '/retrievePassword'|| to.path === '/error'){
            next();
    }else{
        if(token == null || token === ''){
            next('/login');
        } else{
            next();
        }
    }
})



export default router
