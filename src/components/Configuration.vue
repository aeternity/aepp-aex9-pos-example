<template>
  <div class="header">
    <div class="header-left-button" v-if="config !== null && qrdata === null">
      <button @click="previousPage()" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-left-button" v-if="qrdata !== null">
      <button @click="qrdata = null" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-left-button" v-if="scanqr">
      <button @click="scanqr = false" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-right-title">Configure mPOS</div>
  </div>

  <div class="main">
    <div v-if="scanqr">
      <qrcode-stream @decode="onDecode"/>
    </div>
    <div v-if="!scanqr && qrdata !== null">
      <div class="qr-container"
           @click="qrdata = null"
           :class="qrdata !== null ? 'has-qr': null">
        <qrcode-vue
            v-if="qrdata !== null"
            :value="qrdata"
            :size="200"/>
      </div>
    </div>
    <div v-if="!scanqr && qrdata === null">
      <div v-if="config === null">
        <div>Join an existing mPOS event, use the camera to scan a configuration from another mPOS device</div>

        <button class="full-width-button" @click="scanqr = true">
          Join Existing Event
        </button>

        <div class="text-margin-top">
          Create a new mPOS event, deploy the contracts, mint tokens and create a configuration to be scanned by other
          mPOS devices
        </div>

        <button class="full-width-button secondary" @click="nextPage(CREATE_CONFIGURATION)">
          Create New Event
        </button>
      </div>

      <div class="main" v-if="config !== null">
        <div class="public-key truncate-text" v-if="keypair !== null" @click="qrdata = keypair.publicKey">
          {{ keypair.publicKey }}
        </div>

        <button class="full-width-button" @click="qrdata = JSON.stringify(config)">
          Share Configuration
        </button>

        <button class="full-width-button secondary" @click="resetConfig()">
          Reset Configuration
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'
import deprecatedConfig from '@/assets/content/config.json';
import {CREATE_CONFIGURATION, SETUP} from "@/utils/pages";
import QrcodeVue from "qrcode.vue";
import {QrcodeStream} from "vue3-qrcode-reader";

export default {
  components: {
    QrcodeVue,
    QrcodeStream,
  },
  data() {
    return {
      publicKey: null,
      qrdata: null,
      scanqr: false,
    };
  },
  methods: {
    ...mapMutations(['nextPage', 'previousPage', 'resetConfig', 'setConfig', 'setTokenInfo']),
    createConfig() {
      this.setConfig(deprecatedConfig)
      this.nextPage(SETUP)
    },
    async onDecode(decodedString) {
      this.setConfig(JSON.parse(decodedString))
      this.scanqr = false
    }
  },
  computed: {
    ...mapState(['config', 'keypair', 'tokenInfo']),
    CREATE_CONFIGURATION: () => CREATE_CONFIGURATION,
  },
}
</script>

<style lang="scss">
@import "~@/assets/styles/qr-container.scss";

.text-margin-top {
  margin-top: 3rem;
}

.public-key {
  margin-bottom: 2rem;
}

.truncate-text {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main {
  .full-width-button {
    margin-top: 0.5rem;
  }
}
</style>
