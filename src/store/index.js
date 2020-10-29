import Vue from 'vue';
import Vuex from 'vuex';
import data from '@/assets/data/dropdown.json';

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
		setData({ commit }) {
			commit('SET_DATA', data);
		}
	},
	getters: {
		getData(state) {
			return state.data;
		}
	}
})
