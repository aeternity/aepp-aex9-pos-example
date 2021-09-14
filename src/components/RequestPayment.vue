<template>
  <div class="header">
    <div class="heading-primary">Payment Request</div>
    <div class="heading-secondary">Scan the QR Code</div>
  </div>

  <div class="main">
    <div class="qr-container"
         :class="qrdata ? 'has-qr': null">
      <div
          v-if="qrdata === null"
          class="spinner"/>
      <qrcode-vue
          v-if="qrdata"
          :value="'ZEITFESTIVAL' + JSON.stringify(qrdata)"
          :size="200"/>

    </div>
  </div>

  <div class="bottom">
    <div class="bottom-divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right">
        € {{ totalPrice }} ({{ totalTokens }} Tokens)
      </div>
    </div>
    <button class="bottom-button cancel" @click="qrdata = null; changePage('CHECKOUT')">
      Cancel Request
    </button>
  </div>
</template>

<script>

import QrcodeVue from 'qrcode.vue';
import {mapMutations, mapGetters} from 'vuex'
import aeternity from "@/utils/aeternity";
import {clearIntervalVariable} from "@/utils/util";

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      qrdata: null,
      checkPaidInterval: null,
    };
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalTokens', 'totalTokenWithoutDecimals']),
  },
  methods: {
    ...mapMutations(['changePage']),
    async checkPaid() {
      if (this.qrdata !== null) {
        const hasPaid = await aeternity.pos.methods.has_paid(this.invoiceId).then(r => r.decodedResult).catch(console.error);
        if (hasPaid) {
          clearIntervalVariable(this.checkPaidInterval)
          this.changePage('PAID')
        }
      }
    },
  },
  async mounted() {
    this.invoiceId = await aeternity.pos.methods.new_invoice(this.totalTokenWithoutDecimals, {gasPrice: 1500000000}).then(r => r.decodedResult);
    this.qrdata = {invoiceId: this.invoiceId, amount: this.totalTokenWithoutDecimals};
    this.checkPaidInterval = setInterval(this.checkPaid, 1000);
  },
  beforeUnmount() {
    clearIntervalVariable(this.checkPaidInterval)
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/qr-container.scss";
</style>
