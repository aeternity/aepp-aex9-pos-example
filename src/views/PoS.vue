<template>
  <Setup v-if="page === SETUP"/>
  <RequestFunding v-if="page === REQUEST_FUNDING"/>
  <AmountInput v-if="page === AMOUNT_INPUT"/>
  <Cart v-if="page === CART"/>
  <SelectItemsCart v-if="page === SELECT_ITEMS_CART"/>
  <SelectItems v-if="page === SELECT_ITEMS"/>
  <RequestPayment v-if="page === REQUEST_PAYMENT"/>
  <Paid v-if="page === PAID"/>
  <Configuration v-if="page === CONFIGURATION"/>
  <CreateConfiguration v-if="page === CREATE_CONFIGURATION"/>
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
import Configuration from "@/components/Configuration";
import CreateConfiguration from "@/components/CreateConfiguration";
import {
  AMOUNT_INPUT,
  CART, CONFIGURATION,
  CREATE_CONFIGURATION, PAID,
  REQUEST_FUNDING, REQUEST_PAYMENT,
  SELECT_ITEMS,
  SELECT_ITEMS_CART,
  SETUP
} from "@/utils/pages";

export default {
  name: 'PoS',
  components: {
    CreateConfiguration,
    Configuration,
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
    SETUP: () => SETUP,
    REQUEST_FUNDING: () => REQUEST_FUNDING,
    AMOUNT_INPUT: () => AMOUNT_INPUT,
    CART: () => CART,
    SELECT_ITEMS_CART: () => SELECT_ITEMS_CART,
    SELECT_ITEMS: () => SELECT_ITEMS,
    REQUEST_PAYMENT: () => REQUEST_PAYMENT,
    PAID: () => PAID,
    CONFIGURATION: () => CONFIGURATION,
    CREATE_CONFIGURATION: () => CREATE_CONFIGURATION,

  },
  methods: {
    ...mapMutations(['nextPage'])
  },
}
</script>

<style lang="scss">
@import "~@/assets/styles/styles.scss";
</style>
