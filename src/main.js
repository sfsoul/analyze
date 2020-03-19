import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import registerBaseComponent from './components/base/index';

Vue.config.productionTip = false;
registerBaseComponent();
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
