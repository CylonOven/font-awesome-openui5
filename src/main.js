import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHighlightJS from 'vue-highlight.js';
import iView from 'iview';

import router from './router';
import App from './App';

import 'iview/dist/styles/iview.css';
import 'highlight.js/styles/atom-one-dark.css';
import './scss/main.scss';

Vue.use(VueRouter);
Vue.use(VueHighlightJS);
Vue.use(iView);

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
