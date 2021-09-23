<template>
  <div class="header">
    <div class="header-left-button" v-if="config !== null">
      <button @click="previousPage()" class="secondary"><img src="../assets/img/back-arrow.svg"></button>
    </div>
    <div class="header-right-title">Configure mPOS</div>
  </div>

  <div class="main" v-if="config === null">
    <div>Join an existing mPOS event, use the camera to scan a configuration from another mPOS device</div>

    <button class="full-width-button" @click="scanConfig()">
      Join Existing Event
    </button>

    <div class="text-margin-top">Create a new mPOS event, deploy the contracts, mint tokens and create a configuration
      to be scanned by other mPOS devices
    </div>

    <button class="full-width-button secondary" @click="createConfig()">
      Create New Event
    </button>
  </div>

  <div class="main" v-if="config !== null">

    <div class="truncate-text" v-if="keypair !== null">{{ keypair.publicKey }}</div>

    <button class="full-width-button" @click="resetConfig()">
      Reset Configuration
    </button>
  </div>
</template>

<script>

import {mapMutations, mapState} from 'vuex'
import deprecatedConfig from '@/assets/content/config.json';
import {SETUP} from "@/utils/pages";

export default {
  components: {},
  data() {
    return {
      publicKey: null
    };
  },
  methods: {
    ...mapMutations(['nextPage', 'previousPage', 'resetConfig', 'setConfig', 'setTokenInfo']),
    createConfig() {
      this.setConfig(deprecatedConfig)
      this.nextPage(SETUP)
    },
  },
  computed: {
    ...mapState(['config', 'keypair', 'tokenInfo']),
  },
}
</script>

<style lang="scss">
.text-margin-top {
  margin-top: 3rem;
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
