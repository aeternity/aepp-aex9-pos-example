<template>
  <div class="header">
    <div class="payment-request-heading-1">Please fund this Point of Sales with 1 AE</div>
    <div class="payment-request-heading-2">Scan the QR Code</div>
  </div>

  <div class="main">
    <div class="qr-container"
         :class="publicKey ? 'has-qr': null">
      <div
          v-if="publicKey === null"
          class="spinner"/>
      <qrcode-vue
          v-if="publicKey"
          :value="publicKey"
          :size="200"/>

    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
import aeternity from "@/utils/aeternity";
import {clearIntervalVariable} from "@/utils/util";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      publicKey: null,
      checkFundedInterval: null,
    };
  },
  methods: {
    ...mapMutations(['changePage']),
    async checkFunded() {
      if (this.publicKey !== null) {
        const balance = await aeternity.checkBalance().catch(console.error);
        if (balance && balance > 0) {
          clearIntervalVariable(this.checkFundedInterval);
          this.changePage('SELECT_ITEMS');
        }
      }
    }
  },
  async mounted() {
    this.publicKey = await aeternity.getPublicKey();
    const balance = await aeternity.checkBalance();
    console.log(balance)
    if (balance > 0) {
      this.changePage('SELECT_ITEMS');
    } else {
      this.checkFundedInterval = setInterval(this.checkFunded, 1000);
    }
  },
  beforeUnmount() {
    clearIntervalVariable(this.checkFundedInterval);
  }
}
</script>
