<template>
  <h1>Client Example</h1>
  <qrcode-stream v-if="state === 'READY'" @decode="onDecode"></qrcode-stream>
  <span class="icon">{{ state }}</span>
</template>

<script>
import aeternity from '../utils/aeternity';
import {QrcodeStream} from 'vue3-qrcode-reader';

export default {
  name: 'Client',
  components: {
    QrcodeStream
  },

  data() {
    return {
      state: 'NOT_READY'
    };
  },
  methods: {
    async onDecode(decodedString) {
      this.state = '⌛';
      const jsonString = decodedString.replace('ZEITFESTIVAL', '');
      const invoiceData = JSON.parse(jsonString);

      await aeternity.token.methods.burn_trigger_pos(invoiceData.amount, aeternity.posContractAddress, invoiceData.invoiceId);
      this.state = '✅';
    }
  },
  async mounted() {
    await aeternity.init();
    this.state = 'READY'
  }
}
</script>

<style>
@import "~@/assets/styles/styles.scss";

.icon {
  display: block;
  font-size: 4rem;
}
</style>
