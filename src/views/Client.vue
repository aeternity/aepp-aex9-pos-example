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
      const invoiceData = JSON.parse(decodedString);

      await aeternity.token.methods.burn_trigger_pos(invoiceData.price, aeternity.posContractAddress, invoiceData.id);
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  display: block;
  font-size: 4rem;
}
</style>
