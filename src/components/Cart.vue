<template>
  <div class="header">
    <div class="header-left-button">
      <button @click="previousPage()"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-right-title">Order Details</div>
  </div>

  <div class="main">
    <div
        class="item"
        v-for="item in cartItems"
        :key="item.id">
      <div class="item-icon"> {{ item.icon }}</div>
      <div class="item-main">
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">{{ item.price }} {{ tokenInfo.symbol }}</div>
        <div class="item-total" v-if="config.showFiat">€ {{ item.price * config.pricePerToken }}</div>
      </div>
      <div class="item-buttons">
        <button class="item-remove-button" @click="removeFromCart(item)">-</button>
        <div>{{ cart.filter(i => i.id === item.id).length }}</div>
        <button class="item-add-button" @click="addToCart(item)">+</button>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right" v-if="config.showFiat">
        € {{ totalPrice }} ({{ totalTokens }} {{ tokenInfo.symbol }})
      </div>
      <div class="bottom-summary-right" v-else>
        {{ totalTokens }} {{ tokenInfo.symbol }}
      </div>
    </div>
    <button class="full-width-button" @click="nextPage()">
      💸 Request Payment
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapState(['cart', 'tokenInfo', 'config']),
    ...mapGetters(['totalTokens', 'cartItems', 'totalPrice']),
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart', 'previousPage', 'nextPage']),
  }
}
</script>

