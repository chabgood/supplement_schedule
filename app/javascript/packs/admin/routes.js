import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from './components/dashboard/index.vue';
import UserIndex from './components/users/index.vue';
import UserEdit from './components/users/edit.vue';
import UserNew from './components/users/new.vue';
import SupplementIndex from './components/supplements/index.vue';
import SupplementEdit from './components/supplements/edit.vue';
import SupplementNew from './components/supplements/new.vue';

const router = new VueRouter({
  mode: 'history',
  base: `${I18n.prefix}admin`,
  routes: [
    { path: '/', component: Dashboard, name: 'root_path' },
    { path: '/users', component: UserIndex, name: 'users_path' },
    { path: '/users/new', component: UserNew, name: 'new_user_path' },
    { path: '/users/:id/edit', component: UserEdit, name: 'edit_user_path' },
    { path: '/supplements', component: SupplementIndex, name: 'supplements_path' },
    { path: '/supplements/new', component: SupplementNew, name: 'new_supplement_path' },
    { path: '/supplements/:id/edit', component: SupplementEdit, name: 'edit_supplement_path' }
  ]
});

export default router;
