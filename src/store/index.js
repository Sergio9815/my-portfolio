import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    darkTheme: false,
  },
  mutations: {
    setTheme(state, payload) {
      state.darkTheme = payload;
    },
  },
  actions: {
    changeTheme({ commit, state }) {
      const theme = !state.darkTheme;
      commit('setTheme', theme);
    },
  },
});

export default store;
