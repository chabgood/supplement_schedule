import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomeIndex from './components/home/index.vue';
import SupplementIndex from './components/supplements/index.vue';
import SupplementShow from './components/supplements/show.vue';

const router = new VueRouter({
  mode: 'history',
  base: `${I18n.prefix}`,
  routes: [
    { path: '/', component: HomeIndex, name: 'root_path' },
    { path: '/supplements', component: SupplementIndex, name: 'supplements_path' },
    { path: '/supplements/:id', component: SupplementShow, name: 'supplement_path' }
  ]
});

export default router;
