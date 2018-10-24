import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Home from './pages/Home/Home.vue'
import Classify from './pages/Classify/Classify.vue'
import ShopCar from './pages/ShopCar/ShopCar.vue'
import User from './pages/User/User.vue'
import SearchPage from './pages/SearchPage.vue'
import ProDetails from './pages/ProDetails/ProDetails.vue'
import detailsPage from './pages/ProDetails/components/detailsPage.vue'
import publicPraise from './pages/ProDetails/components/publicPraise.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Classify',
            name: 'Classify',
            component: Classify
        },
        {
            path: '/ShopCar',
            name: 'ShopCar',
            component: ShopCar
        },
        {
            path: '/User',
            name: 'User',
            component: User
        },
        {
            path: '/ProDetails',
            name: 'ProDetails',
            component: ProDetails,
            redirect: '/ProDetails/detailsPage',
            children: [{
                path: '/ProDetails/detailsPage',
                component: detailsPage
            },
                {
                    path: '/ProDetails/publicPraise',
                    component: publicPraise
                }
            ]
        },
        {
            path: '/SearchPage',
            name: 'SearchPage',
            component: SearchPage
        }
    ]
})
