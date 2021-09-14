import {createStore} from 'vuex'
import items from "@/assets/content/items.json";
import config from "@/assets/content/config.json";

const store = createStore({
  state() {
    return {
      page: 'SETUP',
      cart: items.map(item => {
        item.count = 0
        return item
      }),
    }
  },
  mutations: {
    resetStore(state) {
      state.cart = items.map(item => {
        item.count = 0
        return item
      })
    },
    addToCart(state, item) {
      state.cart = state.cart.map(cartItem => {
        if (cartItem.id === item.id) cartItem.count++
        return cartItem
      });
    },
    removeFromCart(state, item) {
      state.cart = state.cart.map(cartItem => {
        if (cartItem.count > 0 && cartItem.id === item.id) cartItem.count--
        return cartItem
      });
    },
    changePage(state, page) {
      state.page = page;
    },
  },

  getters: {
    totalTokens(state) {
      return state.cart.reduce((acc, item) => acc + item.price  * item.count, 0);
    },
    totalTokenWithoutDecimals(state, getters) {
      return getters.totalTokens * Math.pow(10, config.decimals);
    },
  }
})

export default store;
