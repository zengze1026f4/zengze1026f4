import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import List from '../pages/Lists.vue'
import Search from '../pages/Search.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detailpages.vue'
import Main from '../pages/Main.vue'
import Login from '../pages/Logins.vue'
import Reg from '../pages/Regs.vue'
import Cart from '../pages/Cart.vue'
import Slide1 from '../components/Slide1.vue'
import Slide2 from '../components/Slide2.vue'
import Slide3 from '../components/Slide3.vue'
const routes = [{
    // 当页面为http://localhost:8080/home 在<router-view>加载Home组件
    path: '/main',
    name: 'main',
    component: Main,
    children: [{
        path: 'home',
        name: 'home',
        component: Home,
    }, {
        path: 'search',
        name: 'search',
        component: Search,
        children: [{
            path: 'slide1',
            name: 'slide1',
            component: Slide1,
        },
        {
            path: 'slide2',
            name: 'slide2',
            component: Slide2,
        },
        {
            path: 'slide3',
            name: 'slide3',
            component: Slide3,
        },
        {
            path: '/main/search',
            redirect: '/main/search/slide1'
        }
        ]
    },
    {
        path: 'mine',
        name: 'mine',
        component: Mine
    }
    ]
},
{
    path: '/cart',
    name: 'cart',
    component: Cart
},
{
    path: '/list',
    name: 'list',
    component: List
},
{
    path: '/detail',
    name: 'detail',
    component: Detail
},
{
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/reg',
    name: 'reg',
    component: Reg
},
{
    path: '/',
    redirect: '/main/home'
}]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');
        if (token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});

export default router