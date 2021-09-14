<template>
  <div class="header">
    <div class="back-button">
      <div class="checkout-heading">Order Details</div>
    </div>
  </div>

  <div class="main">
    <div class="amount-input">
      <input v-model="tokenAmount" type="number" min="0" step="0.1" v-on:keyup.enter="changePage('REQUEST_PAYMENT')" /> {{ config.tokenName }}
    </div>
  </div>

  <div class="bottom">
    <div class="bottom-divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right">
        {{ requestTokenAmount }} {{ config.tokenName }}
      </div>
    </div>
    <button class="bottom-button" @click="changePage('REQUEST_PAYMENT')" :disabled="!inputValid">
      💸 Request Payment
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import config from "@/assets/content/config.json";

export default {
  data() {
    return {
      inputValid: true,
    };
  },
  computed: {
    ...mapState(['requestTokenAmount']),
    tokenAmount: {
      get() {
        return this.requestTokenAmount;
      },
      set(value) {
        this.setRequestTokenAmount(0) // stupid hack to force update for getter to update again
        const roundedAmount = Math.round(parseFloat(value) * 10) / 10
        this.setRequestTokenAmount(roundedAmount || 0)
      }
    },
    config: () => config,
  },
  methods: {
    ...mapMutations(['setRequestTokenAmount', 'changePage']),
  }
}
</script>

<style lang="scss">
@use "sass:color";
@import "~@/assets/styles/items.scss";

.amount-input {
  input {
    border: 3px solid color.adjust(#161616, $alpha: -0.5);
    padding: 1rem;
    border-radius: 1rem;
    width: 6rem;
    font-size: 2.5rem;
  }

  font-size: 2rem;
  margin: 4rem auto 6rem auto;
  text-align: center;
}

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
