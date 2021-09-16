<template>
  <div class="header">
    <div class="heading-primary">Payment Successful</div>
  </div>
  <div class="main">
    <div class="success-container">✅</div>
  </div>
  <div class="bottom">
    <button class="bottom-button" @click="reset()">
      Continue
    </button>
  </div>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations(['nextPage', 'resetStore']),
    reset() {
      this.resetStore();
      this.nextPage();
    }
  }
}
</script>

<style lang="scss">
.success-container {
  font-size: 6rem;
  text-align: center;
  margin: 6rem 0;
}
</style>
