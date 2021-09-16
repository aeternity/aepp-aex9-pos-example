import {createStore} from 'vuex'
import items from "@/assets/content/items.json";
import config from "@/assets/content/config.json";
import {nextPageFromCurrent, previousPageFromCurrent} from "@/utils/pages";

const store = createStore({
  state() {
    return {
      page: null,
      requestTokenAmount: 0,
      cart: items.map(item => {
        item.count = 0
        return item
      }),
    }
  },
  mutations: {
    setRequestTokenAmount(state, amount) {
      state.requestTokenAmount = amount
    },
    resetStore(state) {
      state.requestTokenAmount = 0
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
    nextPage(state, page) {
      state.page = page || nextPageFromCurrent(state.page)
    },
    previousPage(state) {
      state.page = previousPageFromCurrent(state.page)
    }
  },
  getters: {
    totalTokens(state) {
      return state.requestTokenAmount || state.cart.reduce((acc, item) => acc + item.price  * item.count, 0)
    },
    totalTokenWithoutDecimals(state, getters) {
      return getters.totalTokens * Math.pow(10, config.decimals)
    },
  }
})

export default store;
