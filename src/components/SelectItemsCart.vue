<template>
  <div class="header">
    <div class="header-left-button">
      <button @click="nextPage(CONFIGURATION)" class="secondary">⚙️</button>
    </div>
    <div class="header-right">
      <button
          class="filter-button"
          :class="filter === 'ALL' ? 'selected' : null"
          @click="filter = 'ALL'">
        All
      </button>
      <button
          class="filter-button"
          :class="filter === 'DRINKS' ? 'selected' : null"
          @click="filter = 'DRINKS'">
        🍹 Drinks
      </button>
      <button
          class="filter-button"
          :class="filter === 'FOOD' ? 'selected' : null"
          @click="filter = 'FOOD'">
        🍔 Food
      </button>
    </div>
  </div>
  <div class="main">
    <div class="item-heading">Select Items</div>

    <div
        class="item"
        v-for="item in filteredItems"
        :key="item.id">
      <div class="item-icon"> {{ item.icon }}</div>
      <div class="item-main">
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">{{ item.price }} {{ tokenInfo.symbol }}</div>
        <div class="item-total" v-if="config.showFiat">€ {{ item.price * config.pricePerToken }}</div>
      </div>
      <div class="item-buttons">
        <button class="item-add-button" @click="addToCart(item)">+</button>
      </div>
    </div>
  </div>

  <div class="bottom">
    <div class="divider"/>
    <div class="bottom-summary">Items
      <div class="bottom-summary-right">
        {{ cart.length }}
      </div>
    </div>
    <button class="full-width-button" @click="nextPage()" :disabled="cart.length === 0">
      🛒 Checkout
    </button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import items from '@/assets/content/items.json';
import {CONFIGURATION} from "@/utils/pages";

export default {
  data() {
    return {
      filter: 'ALL',
    };
  },
  computed: {
    ...mapState(['cart', 'tokenInfo', 'config']),
    CONFIGURATION: () => CONFIGURATION,
    filteredItems() {
      return this.filter === 'ALL' ? items : items.filter(item => item.type === this.filter)
    },
  },
  methods: {
    ...mapMutations(['addToCart', 'nextPage']),
  }
}
</script>

<style lang="scss">
@use "sass:color";

.item-heading {
  color: #181818;
  margin-bottom: 1rem;
  font-weight: bold;
}

.filter-button {
  cursor: pointer;
  border-radius: 1rem;
  color: #d12754;
  background: color.adjust(#d12754, $alpha: -0.9);
  padding: 0.5rem 0.8rem;
  margin: 0 0.5rem 0 0;
  min-width: 4rem;
  outline: none;

  &.selected {
    color: #fff;
    background: #d12754;
  }
}
</style>
