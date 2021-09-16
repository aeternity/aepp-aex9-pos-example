<template>
  <div class="header">
    <div class="back-button">
      <div class="checkout-heading">Order Details</div>
    </div>
  </div>

  <div class="main">
    <div
        class="item"
        v-for="item in cart"
        :key="item.id">
      <div class="item-icon"> {{ item.icon }}</div>
      <div class="item-main">
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">{{ item.price }} {{ config.tokenName }}</div>
      </div>
      <div class="item-buttons">
        <button class="item-remove-button" @click="removeFromCart(item)">-</button>
        <div>{{ item.count }}</div>
        <button class="item-add-button" @click="addToCart(item)">+</button>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="bottom-divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right">
        {{ totalTokens }} {{ config.tokenName }}
      </div>
    </div>
    <button class="bottom-button" @click="nextPage()">
      💸 Request Payment
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'
import config from "@/assets/content/config.json";

export default {
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalTokens']),
    config: () => config,
  },
  methods: {
    ...mapMutations(['addToCart', 'removeFromCart', 'nextPage']),
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/items.scss";

.back-button {
  position: relative;
  margin-bottom: 1rem;

  button {
    border-radius: 0.6rem;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
    background: #d12754;
  }

  .checkout-heading {
    position: absolute;
    top: 0.5rem;
    font-size: 1.4rem;
    right: 0;
    opacity: 0.3;
    font-weight: bold;
  }
}
</style>
