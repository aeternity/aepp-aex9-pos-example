<template>
  <Setup v-if="page === 'SETUP'"/>
  <RequestFunding v-if="page === 'REQUEST_FUNDING'"/>
  <AmountInput v-if="page === 'AMOUNT_INPUT'"/>
  <RequestPayment v-if="page === 'REQUEST_PAYMENT'"/>
  <Paid v-if="page === 'PAID'"/>
</template>

<script>
import AmountInput from "@/components/AmountInput";
import Setup from "@/components/Setup";
import {mapMutations, mapState} from "vuex";
import RequestPayment from "@/components/RequestPayment";
import Paid from "@/components/Paid";
import RequestFunding from "@/components/RequestFunding";

export default {
  name: 'PoS',
  components: {
    Paid,
    RequestPayment,
    AmountInput,
    Setup,
    RequestFunding,
  },
  computed: {
    ...mapState(['page']),
  },
  methods: {
    ...mapMutations(['changePage'])
  },
  mounted() {
    this.changePage('SETUP')
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/styles.scss";
</style>
