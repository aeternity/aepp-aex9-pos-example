<template>
  <div class="header">
    <div class="header-left-button" v-if="!scanqr">
      <button @click="previousPage()" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-left-button" v-if="scanqr">
      <button @click="scanqr = false" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-right-title">Create Event</div>
  </div>

  <div class="main">
    <div class="qr-container" v-if="loading">
      <div class="spinner"/>
    </div>
    <div v-if="scanqr && !loading">
      <qrcode-stream @decode="onDecode"/>
    </div>
    <div v-if="!scanqr && !loading">
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
          <input id="cartMode" name="mode" v-model="mode" value="CART" type="radio"/>
          <label for="cartMode">Show cart item selection and checkout</label>
        </div>
        <div>
          <input id="itemsMode" name="mode" v-model="mode" value="ITEMS" type="radio"/>
          <label for="itemsMode">Select items in checkout</label>
        </div>
        <div>
          <input id="amountMode" name="mode" v-model="mode" value="AMOUNT" type="radio"/>
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
        <button class="camera-button" @click="scanqr = true">📷</button>
      </div>

    </div>
  </div>

  <div class="bottom" v-if="!scanqr && !loading">
    <div class="divider"/>
    <div class="bottom-summary"/>
    <button class="full-width-button" :disabled="!valid" @click="createConfig()">
      Create Event
    </button>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'
import {QrcodeStream} from "vue3-qrcode-reader";
import aeternity from "@/utils/aeternity";

export default {
  components: {
    QrcodeStream,
  },
  data() {
    return {
      loading: false,
      scanqr: false,
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
    valid() {
      return this.mode
          && aeternity.isValidAddress(this.mintToAccount)
          && this.tokenName
          && this.tokenAbbreviation
          && this.mintedAmount > 0
    }
  },
  methods: {
    ...mapMutations(['nextPage', 'previousPage', 'resetConfig', 'setConfig', 'setTokenInfo']),
    async createConfig() {
      if (this.valid) {
        this.loading = true
        const contracts = await aeternity.deployContracts(this.tokenName, this.tokenAbbreviation, this.tokenDecimals, this.mintedAmount, this.mintToAccount)
        this.setConfig({...contracts, pricePerToken: this.pricePerToken, mode: this.mode, showFiat: this.showFiat})
        this.loading = false
        this.nextPage()
      }
    },
    onDecode(data) {
      if (aeternity.isValidAddress(data)) {
        this.mintToAccount = data
        this.scanqr = false
      }
    }
  },
}
</script>

<style lang="scss">
@use "sass:color";
@import "~@/assets/styles/qr-container.scss";

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
