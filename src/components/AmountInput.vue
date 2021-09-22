<template>
  <div class="header">
    <div class="back-button">
      <div class="checkout-heading">Order Details</div>
    </div>
  </div>

  <div class="main">
    <div class="amount-input">
      <input v-model="tokenAmount" type="number" min="0" :step="1 / decimalsPower" v-on:keyup.enter="nextPage()" /> {{ tokenInfo.symbol }}
    </div>
  </div>

  <div class="bottom">
    <div class="bottom-divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right" v-if="config.showFiat">
        € {{ totalPrice }} ({{ totalTokens }} {{ tokenInfo.symbol }})
      </div>
      <div class="bottom-summary-right" v-else>
        {{ totalTokens }} {{ tokenInfo.symbol }}
      </div>
    </div>
    <button class="full-width-button" @click="nextPage()" :disabled="!inputValid">
      💸 Request Payment
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  data() {
    return {
      inputValid: true,
    };
  },
  computed: {
    ...mapState(['requestTokenAmount', 'tokenInfo', 'config']),
    ...mapGetters(['totalTokens', 'totalPrice', 'decimalsPower']),
    tokenAmount: {
      get() {
        return this.requestTokenAmount;
      },
      set(value) {
        this.setRequestTokenAmount(0) // stupid hack to force update for getter to update again
        this.setRequestTokenAmount(1) // stupid hack to force update for getter to update again
        const roundedAmount = Math.floor(parseFloat(value) * this.decimalsPower  / this.decimalsPower)
        this.setRequestTokenAmount(roundedAmount || 0)
      }
    },
  },
  methods: {
    ...mapMutations(['setRequestTokenAmount', 'nextPage']),
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
