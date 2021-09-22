<template>
  <div class="header">
    <div class="heading-primary">Please fund this Point of Sales with 1 AE</div>
    <div class="heading-secondary">Scan the QR Code</div>
  </div>

  <div class="main">
    <div class="qr-container"
         :class="keypair !== null ? 'has-qr': null">
      <div
          v-if="keypair === null"
          class="spinner"/>
      <qrcode-vue
          v-if="keypair !== null"
          :value="keypair.publicKey"
          :size="200"/>

    </div>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'
import aeternity from "@/utils/aeternity";
import {clearIntervalVariable} from "@/utils/util";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      checkFundedInterval: null,
    };
  },
  computed: {
    ...mapState(['keypair']),
  },
  methods: {
    ...mapMutations(['nextPage']),
    async checkFunded() {
      if (this.keypair !== null) {
        const balance = await aeternity.checkBalance().catch(console.error);
        if (balance && balance > 0) {
          clearIntervalVariable(this.checkFundedInterval);
          this.nextPage();
        }
      }
    }
  },
  async mounted() {
    const balance = await aeternity.checkBalance();
    console.log(balance)
    if (balance > 0) {
      this.nextPage();
    } else {
      this.checkFundedInterval = setInterval(this.checkFunded, 1000);
    }
  },
  beforeUnmount() {
    clearIntervalVariable(this.checkFundedInterval);
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/qr-container.scss";
</style>
