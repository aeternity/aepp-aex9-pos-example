<template>
  <div class="header">
    <div class="header-left-button">
      <button @click="nextPage(CONFIGURATION)" class="secondary">⚙️</button>
    </div>
    <div class="header-right-title">Order Details</div>
  </div>

  <div class="main">
    <div
        class="item"
        v-for="item in selectedItems"
        :key="item.id">
      <div class="item-icon"> {{ item.icon }}</div>
      <div class="item-main">
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">{{ item.price }} {{ tokenInfo.symbol }}</div>
        <div class="item-total" v-if="config.showFiat">€ {{ item.price * config.pricePerToken }}</div>
      </div>
      <div class="item-buttons">
        <button class="item-remove-button" @click="removeSelectedItem(item)">-</button>
        <div>{{ item.count }}</div>
        <button class="item-add-button" @click="addSelectedItem(item)">+</button>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="bottom-divider"/>
    <div class="bottom-summary">Total
      <div class="bottom-summary-right" v-if="config.showFiat">
        € {{ totalPrice }} ({{ totalTokens }} {{ tokenInfo.symbol }})
      </div>
      <div class="bottom-summary-right" v-else>
        {{ totalTokens }} {{ tokenInfo.symbol }}
      </div>
    </div>
    <button class="full-width-button" @click="nextPage()">
      💸 Request Payment
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'
import {CONFIGURATION} from "@/utils/pages";

export default {
  computed: {
    ...mapState(['selectedItems', 'tokenInfo', 'config']),
    ...mapGetters(['totalTokens', 'totalPrice']),
    CONFIGURATION: () => CONFIGURATION,
  },
  methods: {
    ...mapMutations(['addSelectedItem', 'removeSelectedItem', 'nextPage']),
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/items.scss";
</style>
