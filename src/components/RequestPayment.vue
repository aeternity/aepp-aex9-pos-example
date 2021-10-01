<template>
  <div class="heading-primary">Payment Request</div>
  <div class="heading-secondary">Scan the QR Code</div>

  <div class="main">
    <div class="qr-container"
         :class="qrdata ? 'has-qr': null">
      <div
          v-if="qrdata === null"
          class="spinner"/>
      <qrcode-vue
          v-if="qrdata"
          :value="JSON.stringify(qrdata)"
          :size="200"/>

    </div>
  </div>

  <div class="bottom">
    <div class="divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right">
       {{ totalTokens }} {{ tokenInfo.symbol }}
      </div>
    </div>
    <button class="full-width-button cancel" @click="qrdata = null; previousPage()">
      Cancel Request
    </button>
  </div>
</template>

<script>

import QrcodeVue from 'qrcode.vue';
import {mapMutations, mapGetters, mapState} from 'vuex'
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
    ...mapGetters(['totalTokens', 'totalTokenWithoutDecimals']),
    ...mapState(['tokenInfo', 'config']),
  },
  methods: {
    ...mapMutations(['nextPage', 'previousPage']),
    async checkPaid() {
      if (this.qrdata !== null) {
        const hasPaid = await aeternity.pos.methods.has_paid(this.invoiceId).then(r => r.decodedResult).catch(console.error);
        if (hasPaid) {
          clearIntervalVariable(this.checkPaidInterval)
          this.nextPage()
        }
      }
    },
  },
  async mounted() {
    this.invoiceId = await aeternity.pos.methods.new_invoice(this.totalTokenWithoutDecimals, {gasPrice: 1500000000}).then(r => r.decodedResult);
    this.qrdata = {invoiceId: this.invoiceId, amount: this.totalTokenWithoutDecimals};
    this.qrdata = {
      type: 'mPoS',
      version: 1,
      tokenContract: this.config.tokenContractAddress,
      amount: this.totalTokenWithoutDecimals,
      invoiceId: this.invoiceId,
      invoiceContract: this.config.posContractAddress
    }
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
