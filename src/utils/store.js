import {createStore} from 'vuex'
import items from "@/assets/content/items.json";

const store = createStore({
  state() {
    return {
      page: 'SETUP',
      pricePerToken: 3,
      cart: []
    }
  },
  mutations: {
    resetStore(state) {
      state.cart = [];
    },
    addToCart(state, item) {
      state.cart.push(item);
    },
    removeFromCart(state, item) {
      const thisItems = state.cart.filter(i => i.id === item.id);
      const otherItems = state.cart.filter(i => i.id !== item.id);
      thisItems.shift();
      const cartItems = otherItems.concat(thisItems);
      if (cartItems.length === 0) state.page = 'SELECT_ITEMS';
      state.cart = cartItems;
    },
    changePage(state, page) {
      state.page = page;
    },
  },

  getters: {
    totalPrice(state) {
      return state.cart.reduce((acc, item) => acc + item.price * state.pricePerToken, 0);
    },
    totalTokens(state) {
      return state.cart.reduce((acc, item) => acc + item.price, 0);
    },
    cartItems(state) {
      const cartIds = state.cart.map(item => item.id);
      return items.filter(item => cartIds.includes(item.id));
    },
  }
})

export default store;
