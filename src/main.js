import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_menuBar from './plugins/global_menuBar.js'
import VueTouch from 'vue-touch'
import 'lib-flexible/flexible.js'
import './style/common.css'
import './style/iconfont.css'
import store from './store/index.js'

Vue.config.productionTip = false;

Vue.use(global_menuBar);
Vue.use(VueTouch, {name: 'v-touch'});
VueTouch.config.swipe = {
    threshold: 50 //手指左右滑动距离
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
