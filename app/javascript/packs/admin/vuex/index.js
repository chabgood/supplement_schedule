import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import NavTopStore from './stores/nav_top_store.js';
import DashboardStore from './stores/dashboard_store.js';
import UserStore from './stores/user_store.js';
import MusicianStore from './stores/musician_store.js';
import ChatStore from './stores/chat_store.js';

const store = new Vuex.Store({
  modules: {
    NavTopStore,
    DashboardStore,
    UserStore,
    MusicianStore,
    ChatStore
  }
});

export default store;
