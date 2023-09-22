import { createApp } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/display.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router/router.js'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


let elementApp = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    elementApp.component(key, component)
}
elementApp
    .use(router)
    .use(ElementPlus)
    .use(vue3videoPlay)
    .mount('#app');

