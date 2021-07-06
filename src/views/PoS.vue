<template>
  <h1>AEX-9 PoS Example</h1>
  <div>
    <button
        v-if="state === 'FRESH'"
        @click="newInvoice(10)">
      New Invoice for 10 TZT
    </button>

    <qrcode-vue
        v-if="state === 'AWAITING'"
        :value="JSON.stringify(qrdata)"
        size="300"/>

    <span class="icon">
      {{ paid }}
    </span>
  </div>
</template>

<script>
import aeternity from '../utils/aeternity'
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'App',
  components: {
    QrcodeVue,
  },
  data() {
    return {
      address: null,
      invoiceId: null,
      qrdata: null,
      state: 'NOT_READY',
      paid: '⛔',
    };
  },
  methods: {
    async newInvoice(price) {
      this.invoiceId = await aeternity.pos.methods.new_invoice(price).then(r => r.decodedResult);
      this.qrdata = {id: this.invoiceId, price};
      this.state = 'AWAITING'
      this.paid = '⌛';
    },
    async checkPaid() {
      if (this.state === 'AWAITING') {
        console.log(this.invoiceId);
        const hasPaid = await aeternity.pos.methods.has_paid(this.invoiceId).then(r => r.decodedResult);
        console.log(hasPaid);
        if (hasPaid) {
          this.state = 'FRESH'
          this.paid = '✅';
        }
      }
    },
  },
  async mounted() {
    await aeternity.init();
    this.state = 'FRESH'

    setInterval(this.checkPaid, 800)
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
  margin-top: 1rem;
  display: block;
  font-size: 4rem;
}
</style>
