<template>
  <div class="header">
    <div class="heading-primary">Loading, please wait</div>
  </div>
  <div class="main">
    <div class="qr-container">
      <div class="spinner"/>
    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
import aeternity from "@/utils/aeternity";

export default {
  data() {
    return {
      checkFundedInterval: null,
    };
  },
  methods: {
    ...mapMutations(['changePage']),
  },
  async mounted() {
    const keypairString = localStorage.getItem('keypair');
    let keypair = null;

    try {
      keypair = JSON.parse(keypairString);
    } catch (e) {
      console.error(e);
    }

    if (!keypair) {
      keypair = aeternity.generateAccount()
      localStorage.setItem('keypair', JSON.stringify(keypair));
    }

    await aeternity.init(keypair);
    const balance = await aeternity.checkBalance().catch(console.error);

    if (balance && balance > 0) {
      this.changePage('SELECT_ITEMS')
    } else {
      this.changePage('REQUEST_FUNDING')
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/qr-container.scss";
</style>
