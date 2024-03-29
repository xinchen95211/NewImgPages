import { createApp } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementPlus, {ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import vue3videoPlay from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router/router.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import IndexDB from "@/utils/indexDB";
import axios from "axios";
import '@/style/LoginCSS.css'
import VueUuid from 'vue-uuid'

let elementApp = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    elementApp.component(key, component)
}
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem("token")
    config.headers['Uuid'] = localStorage.getItem("uuid")
    return config
}, function (error) {
    router.push('/error');
    return Promise.reject(error)
})

axios.interceptors.response.use(function(response){
        if (response.data){
            switch (response.data.code){
                case 6000 : {localStorage.setItem("token",response.data.data);break}
                case 4001 : {
                    ElMessage.error(response.data.message);
                    localStorage.removeItem("token");
                    window.reload('/login');
                    break;
                }
                case 4004 : {this.$router.push('/error');break}
                case 4003 : case 4012 : case 4013 :{
                    ElMessage.error(response.data.message);
                    break
                }
                case 2001 : {
                    ElMessage.success(response.data.message);
                    break
                }
                default:
                    break;
            }
        }
        return response
    },function (error){
        ElMessage.error("与服务器链接发生了点错误,请稍后再试")
        return Promise.reject(error)
    }
);

elementApp
    .use(IndexDB)
    .use(router)
    .use(VueUuid)
    .use(ElementPlus)
    .use(vue3videoPlay)
    .mount('#app');

