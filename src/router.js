import Main from './Main.vue'
import BookDetail from './BookDetail.vue'   //引入BookDetail组件
import Home from './Home.vue'
import Explorer from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'

const routes = [
    {
        name: 'Main', path: '/', component: Main,
        children: [
            {name: 'Home', path: 'home', component: Home},
            {name: 'Explorer', path: 'explorer', component: Explorer},
            {name: 'Cart', path: 'cart', component: Cart},
            {name: 'Me', path: 'me', component: Me}
            // {path: '*', redirect: 'home'}
        ]
    },
    {name: 'BookDetail', path: '/bookDetail/:id', component: BookDetail}   //配置BookDetail路由
];

export default{
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes
}


