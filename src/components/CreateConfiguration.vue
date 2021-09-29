<template>
  <div class="header">
    <div class="header-left-button">
      <button @click="previousPage()" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-right-title">Create Event</div>
  </div>

  <div class="main">
    <div class="input-item flex">
      <label for="tokenName">Token Name</label>
      <input id="tokenName" v-model="tokenName" type="text"/>
    </div>

    <div class="input-item flex">
      <label for="tokenAbbreviation">Token Abbreviation</label>
      <input id="tokenAbbreviation" v-model="tokenAbbreviation" type="text"/>
    </div>

    <div class="input-item">
      <label for="tokenDecimals">Token Decimals</label>
      <input id="tokenDecimals" v-model="tokenDecimals" type="number" step="1" min="0"/>
    </div>

    <div class="divider"/>

    <div class="input-item">
      <label for="pricePerToken">Fiat Price per Token</label>
      <input id="pricePerToken" v-model="pricePerToken" type="number" min="0"/>
    </div>

    <div class="input-item">
      <input id="showFiat" v-model="showFiat" type="checkbox"/>
      <label for="showFiat">Show Fiat Amount</label>
    </div>

    <div class="input-item">
      <div>
        <input id="cartMode" name="mode" v-model="mode" type="radio"/>
        <label for="cartMode">Show cart item selection and checkout</label>
      </div>
      <div>
        <input id="itemsMode" name="mode" v-model="mode" type="radio"/>
        <label for="itemsMode">Select items in checkout</label>
      </div>
      <div>
        <input id="amountMode" name="mode" v-model="mode" type="radio"/>
        <label for="amountMode">Only show amount input field</label>
      </div>
    </div>

    <div class="divider"/>

    <div class="input-item">
      <label for="mintedAmount">Initial Minted Amount</label>
      <input id="mintedAmount" v-model="mintedAmount" type="number" min="0" step="1"/>
    </div>

    <div class="input-item flex">
      <label for="mintToAccount">Mint to Account</label>
      <input id="mintToAccount" v-model="mintToAccount" type="text"/>
      <button class="camera-button" @click="scanToAccount()">📷</button>
    </div>

  </div>

  <div class="bottom">
    <div class="divider"/>
    <div class="bottom-summary"/>
    <button class="full-width-button" @click="createConfig()">
      Create Event
    </button>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'

export default {
  components: {},
  data() {
    return {
      tokenName: null,
      tokenAbbreviation: null,
      tokenDecimals: 0,
      pricePerToken: 1,
      showFiat: null,
      mode: null,
      mintedAmount: 0,
      mintToAccount: null,
    };
  },
  computed: {
    ...mapState(['config', 'keypair', 'tokenInfo']),
  },
  methods: {
    ...mapMutations(['nextPage', 'previousPage', 'resetConfig', 'setConfig', 'setTokenInfo']),
    createConfig() {

    },
    scanToAccount(){

    }
  },
}
</script>

<style lang="scss">
@use "sass:color";

input {
  margin-left: 0.5rem;
  border: 1px solid color.adjust(#161616, $alpha: -0.5);
  padding: 0.5rem;
  border-radius: 0.5rem;

  &[type="number"] {
    width: 4rem;
  }
}

.camera-button {
  border-radius: 0.6rem;
  width: 2.1rem;
  height: 2.1rem;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  background: color.adjust(#161616, $alpha: -0.95);
}

.input-item {
  margin-bottom: 1rem;

  &.flex {
    display: flex;
    align-items: center;

    input {
      min-width: 4rem;
    }

    :nth-child(2) {
      flex: 1;
    }
  }
}
</style>
