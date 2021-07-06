<template>
  <h1>Client Example</h1>
  <qrcode-stream v-if="state === 'READY'" @decode="onDecode"></qrcode-stream>
  <span class="icon">{{ state }}</span>
</template>

<script>
import aeternity from '../utils/aeternity';
import {QrcodeStream} from 'vue3-qrcode-reader';
import BigNumber from 'bignumber.js';

export default {
  name: 'App',
  components: {
    QrcodeStream
  },

  data() {
    return {
      state: 'NOT_READY'
    };
  },
  computed: {
    ready() {
      return aeternity.ready;
    }
  },
  methods: {
    async onDecode(decodedString) {
      this.state = '⌛ .';
      const invoiceData = JSON.parse(decodedString);

      const {decodedResult} = await aeternity.token.methods.allowance({
        from_account: aeternity.client.selectedAddress,
        for_account: aeternity.posAddress,
      });

      this.state = '⌛ ..';


      const allowanceAmount = decodedResult !== undefined ? new BigNumber(decodedResult).multipliedBy(-1).plus(invoiceData.price).toNumber() : invoiceData.price;
      await aeternity.token.methods[decodedResult !== undefined ? 'change_allowance' : 'create_allowance'](aeternity.posAddress, allowanceAmount);

      this.state = '⌛ ...';

      await aeternity.pos.methods.set_paid(invoiceData.id).then(r => r.decodedResult);
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
