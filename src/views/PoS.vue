<template>
  <Setup v-if="page === 'SETUP'"/>
  <RequestFunding v-if="page === 'REQUEST_FUNDING'"/>
  <AmountInput v-if="page === 'AMOUNT_INPUT'"/>
  <Cart v-if="page === 'CART'"/>
  <SelectItemsCart v-if="page === 'SELECT_ITEMS_CART'"/>
  <SelectItems v-if="page === 'SELECT_ITEMS'"/>
  <RequestPayment v-if="page === 'REQUEST_PAYMENT'"/>
  <Paid v-if="page === 'PAID'"/>
</template>

<script>
import SelectItems from "@/components/SelectItems";
import Setup from "@/components/Setup";
import {mapMutations, mapState} from "vuex";
import RequestPayment from "@/components/RequestPayment";
import Paid from "@/components/Paid";
import RequestFunding from "@/components/RequestFunding";
import AmountInput from "@/components/AmountInput";
import Cart from "@/components/Cart";
import SelectItemsCart from "@/components/SelectItemsCart";

export default {
  name: 'PoS',
  components: {
    Paid,
    RequestPayment,
    SelectItems,
    Setup,
    RequestFunding,
    AmountInput,
    Cart,
    SelectItemsCart,
  },
  computed: {
    ...mapState(['page']),
  },
  methods: {
    ...mapMutations(['nextPage'])
  },
  mounted() {
    this.nextPage()
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/styles.scss";
</style>
