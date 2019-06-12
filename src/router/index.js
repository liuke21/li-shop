/*
路由文件
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入路由组件
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/login/login.vue'

 //使用路由
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/msite'},
        {path:'/msite',component:Msite,meta:{showFoot:true}},
        {path:'/order',component:Order,meta:{showFoot:true}},
        {path:'/profile',component:Profile,meta:{showFoot:true}},
        {path:'/search',component:Search,meta:{showFoot:true}},
        {path:'/login',component:Login}
    ]
})