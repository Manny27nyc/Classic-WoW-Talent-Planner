/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import Vue from 'vue';
import { store } from './includes/Store.js';
import './includes/Mixins.js';
import App from './components/App.vue';
import './assets/css/global.scss';

const vm = new Vue({
    store,
    render: h => h(App)
});

vm.$mount('#app');
