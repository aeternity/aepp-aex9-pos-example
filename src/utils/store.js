import {createStore} from 'vuex'
import items from "@/assets/content/items.json";
import {nextPageFromCurrent, previousPageFromCurrent, SELECT_ITEMS_CART, SETUP} from "@/utils/pages";
import VuexPersistence from 'vuex-persist';

const store = createStore({
  plugins: [new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({config: state.config, keypair: state.keypair}),
  }).plugin],
  state() {
    return {
      config: null,
      keypair: null,
      tokenInfo: {decimals: 0, name: 'Token', symbol: 'TOKEN'},
      page: SETUP,
      requestTokenAmount: 0,
      cart: [],
      selectedItems: items.map(item => {
        item.count = 0
        return item
      }),
    }
  },
  mutations: {
    setKeypair(state, keypair) {
      state.keypair = keypair
    },
    setConfig(state, config) {
      state.config = config
    },
    resetConfig(state) {
      state.config = null
    },
    setRequestTokenAmount(state, amount) {
      state.requestTokenAmount = amount
    },
    resetStore(state) {
      state.requestTokenAmount = 0
      state.selectedItems = items.map(item => {
        item.count = 0
        return item
      })
      state.cart = []
    },
    addSelectedItem(state, item) {
      state.selectedItems = state.selectedItems.map(cartItem => {
        if (cartItem.id === item.id) cartItem.count++
        return cartItem
      });
    },
    removeSelectedItem(state, item) {
      state.selectedItems = state.selectedItems.map(cartItem => {
        if (cartItem.count > 0 && cartItem.id === item.id) cartItem.count--
        return cartItem
      });
    },
    setTokenInfo(state, tokenInfo) {
      state.tokenInfo = tokenInfo
    },
    nextPage(state, page) {
      state.page = page || nextPageFromCurrent(state.config && state.config.mode, state.page)
    },
    previousPage(state) {
      state.page = previousPageFromCurrent(state.config && state.config.mode, state.page)
    },
    removeFromCart(state, item) {
      const thisItems = state.cart.filter(i => i.id === item.id);
      const otherItems = state.cart.filter(i => i.id !== item.id);
      thisItems.shift();
      const cartItems = otherItems.concat(thisItems);
      if (cartItems.length === 0) state.page = SELECT_ITEMS_CART;
      state.cart = cartItems;
    },

    addToCart(state, item) {
      state.cart.push(item);
    },
  },
  getters: {
    totalTokens(state) {
      return state.requestTokenAmount +
        state.selectedItems.reduce((acc, item) => acc + item.price * item.count, 0) +
        state.cart.reduce((acc, item) => acc + item.price, 0)
    },
    totalPrice(state, getters) {
      return getters.totalTokens * state.config.pricePerToken
    },
    totalTokenWithoutDecimals(state, getters) {
      return getters.totalTokens * Math.pow(10, state.tokenInfo.decimals)
    },
    cartItems(state) {
      const cartIds = state.cart.map(item => item.id);
      return items.filter(item => cartIds.includes(item.id));
    },
    decimalsPower(state) {
      return Math.pow(10, state.tokenInfo.decimals)
    }
  }
})

export default store;
