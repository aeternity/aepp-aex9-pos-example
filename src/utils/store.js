import {createStore} from 'vuex'
import config from "@/assets/content/config.json";

const store = createStore({
  state() {
    return {
      page: 'SETUP',
      requestTokenAmount: 0,
    }
  },
  mutations: {
    setRequestTokenAmount(state, amount) {
      state.requestTokenAmount = amount
    },
    changePage(state, page) {
      state.page = page;
    },
  },
  getters: {
    totalTokenWithoutDecimals(state) {
      return state.requestTokenAmount * Math.pow(10, config.decimals);
    },
  }
})

export default store;
