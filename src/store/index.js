import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		data: {}
  },
  mutations: {
		SET_DATA(state, value) {
			state.data = value;
		}
  },
  actions: {
		async fetchLocaleData({ commit }) {
			const response = await fetch('/dropdown.json');
			const data = await response.json();
			commit('SET_DATA', data);
		}
	},
	getters: {
		getData(state) {
			return state.data;
		}
	}
});
