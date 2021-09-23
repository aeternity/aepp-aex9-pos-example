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
import {CONFIGURATION, REQUEST_FUNDING} from "@/utils/pages"

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
    ...mapState(['tokenInfo', 'keypair', 'config']),
  },
  async mounted() {
    if (this.keypair === null) {
      this.setKeypair(aeternity.generateAccount())
    }

    await aeternity.init(this.keypair)

    const balance = await aeternity.checkBalance().catch(console.error)

    if (!balance || parseInt(balance) === 0) {
      return this.nextPage(REQUEST_FUNDING)
    }

    if (this.config !== null) {
      await aeternity.initContracts(this.config)
      this.setTokenInfo(await aeternity.getTokenMetaInfo())
      document.title = `${this.tokenInfo.name}Pay | mPOS`
      return this.nextPage()
    } else {
      return this.nextPage(CONFIGURATION)
    }

  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/qr-container.scss";
</style>
