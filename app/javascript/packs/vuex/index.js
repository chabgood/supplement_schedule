import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import SupplementStore from './stores/supplement_store.js';

const store = new Vuex.Store({
  modules: {
    SupplementStore
  }
});

export default store;
