<template>
  <div class="header">
    <div class="payment-request-heading-1">Payment Successful</div>
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
    ...mapMutations(['changePage', 'resetStore']),
    reset() {
      this.resetStore();
      this.changePage('SELECT_ITEMS');
    }
  }
}
</script>
