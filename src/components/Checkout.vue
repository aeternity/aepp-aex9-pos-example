<template>
  <div class="header">
    <div class="back-button">
      <button @click="changePage('SELECT_ITEMS')"><img src="../assets/img/back-arrow.svg"></button>
      <div class="checkout-heading">Order Details</div>
    </div>
  </div>

  <div class="main">
    <div
        class="item"
        v-for="item in cartItems"
        :key="item.id">
      <div class="item-description">{{ item.description }}</div>
      <div class="item-price">{{ item.price }} Token{{ item.price > 1 ? 's' : '' }}</div>
      <div class="item-total">€ {{ item.price * pricePerToken * cart.filter(i => i.id === item.id).length }}</div>
      <div class="item-buttons">
        <button class="item-remove-button" @click="removeFromCart(item)">-</button>
        {{ cart.filter(i => i.id === item.id).length }}
        <button class="item-add-button" @click="addToCart(item)">+</button>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="bottom-divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right">
        € {{ totalPrice }} ({{ totalTokens }} Tokens)
      </div>
    </div>
    <button class="bottom-button" @click="changePage('REQUEST_PAYMENT')">
      💸 Request Payment
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapState(['cart', 'pricePerToken']),
    ...mapGetters(['totalPrice', 'totalTokens', 'cartItems']),
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart', 'changePage']),
  }
}
</script>
