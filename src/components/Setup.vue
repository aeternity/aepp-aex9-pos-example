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

import {mapMutations, mapState} from 'vuex'
import aeternity from "@/utils/aeternity"
import {REQUEST_FUNDING} from "@/utils/pages"

export default {
  data() {
    return {
      checkFundedInterval: null,
    };
  },
  methods: {
    ...mapMutations(['nextPage', 'setTokenInfo', 'setKeypair']),
  },
  computed: {
    ...mapState(['tokenInfo', 'keypair']),
  },
  async mounted() {
    if (this.keypair === null) {
      this.setKeypair(aeternity.generateAccount())
    }

    await aeternity.init(this.keypair)
    const balance = await aeternity.checkBalance().catch(console.error)

    if (balance && balance > 0) {
      this.nextPage()
    } else {
      this.nextPage(REQUEST_FUNDING)
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/qr-container.scss";
</style>
