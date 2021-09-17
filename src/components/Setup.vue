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
    ...mapMutations(['nextPage', 'setTokenInfo']),
  },
  computed: {
    ...mapState(['tokenInfo']),
  },
  async mounted() {
    const keypairString = localStorage.getItem('keypair')
    let keypair = null

    try {
      keypair = JSON.parse(keypairString)
    } catch (e) {
      console.error(e)
    }

    if (!keypair) {
      keypair = aeternity.generateAccount()
      localStorage.setItem('keypair', JSON.stringify(keypair))
    }

    await aeternity.init(keypair)
    this.setTokenInfo(await aeternity.getTokenMetaInfo())
    const balance = await aeternity.checkBalance().catch(console.error)

    document.title = `${this.tokenInfo.name}Pay | mPOS`

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
