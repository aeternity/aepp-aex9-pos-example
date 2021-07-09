<template>
  <Setup v-if="page === 'SETUP'"/>
  <RequestFunding v-if="page === 'REQUEST_FUNDING'"/>
  <SelectItems v-if="page === 'SELECT_ITEMS'"/>
  <Checkout v-if="page === 'CHECKOUT'"/>
  <RequestPayment v-if="page === 'REQUEST_PAYMENT'"/>
  <Paid v-if="page === 'PAID'"/>

</template>

<script>
import SelectItems from "@/components/SelectItems";
import Checkout from "@/components/Checkout";
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
    SelectItems,
    Checkout,
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
@use "sass:color";
@import "~@/assets/styles/styles.scss";

html, body, #app {
  margin: 0;
  height: 100vh;

  font-family: Rubik, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #181818;
  letter-spacing: 0.03rem;
}

#app {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  flex: 1;
  overflow: auto;
}

button {
  border: none;
}

.filter-button {
  cursor: pointer;
  border-radius: 1rem;
  color: #d12754;
  background: color.adjust(#d12754, $alpha: -0.9);
  padding: 0.5rem;
  margin: 1rem 0.5rem;
  min-width: 4rem;
  outline: none;

  &.selected {
    color: #fff;
    background: #d12754;
  }
}

.back-button {
  position: relative;
  margin: 1rem 0;

  button {
    padding: 0.5rem;
    border-radius: 0.6rem;
    min-width: 2.5rem;
    color: #fff;
    background: #d12754;
  }

  .checkout-heading {
    position: absolute;
    top: 0.5rem;
    font-size: 1.4rem;
    right: 0;
    opacity: 0.3;
    font-weight: bold;
  }
}

.item-heading {
  color: #181818;
  margin: 1rem 0;
  font-weight: bold;
}

.payment-request-heading-1 {
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.payment-request-heading-2 {
  text-align: center;
  opacity: 0.5;
}

/* pixels as qr result is in pixels */
.qr-container {
  margin: 4rem auto 6rem auto;
  background: #FFFFFF;
  border-radius: 2rem;
  text-align: center;
  width: 250px;
  height: 250px;

  &.has-qr {
    box-shadow: 0 10px 20px 3px rgba(0, 0, 0, 0.1);
  }

  canvas {
    margin-top: 25px;
  }

  .spinner {
    transform: scale(5);
  }
}

.success-container {
  font-size: 6rem;
  text-align: center;
  margin: 6rem 0;
}

.item {
  padding: 0.5rem;
  position: relative;

  .item-description {
    font-weight: bold;
  }

  .item-price {
    color: #3B3B3B;
    opacity: 0.3;
    font-size: 0.9rem;
  }

  .item-total {
    margin-top: 0.4rem;
  }

  .item-buttons {
    position: absolute;
    top: 1rem;
    right: 0;

    button {
      cursor: pointer;
      border-radius: 0.4rem;
      width: 1.5rem;
      height: 1.5rem;
      text-align: center;
      margin: 0 0.4rem;
      transition: transform 150ms ease-in-out;
    }

    :hover {
      transform: scale3d(1.25, 1.25, 1);
    }

    .item-remove-button {
      color: #161616;
      background: color.adjust(#161616, $alpha: -0.9);
    }

    .item-add-button {
      color: #fff;
      background: #161616;
    }
  }
}

.bottom {
  width: 100%;
  margin: 0.8rem 0;

  .bottom-divider {
    opacity: 0.2;
    border: 1px dashed #181818;
    margin: 0.8rem 0;
  }

  .bottom-summary {
    position: relative;
    font-weight: bold;
    margin: 0.8rem 0;

    .bottom-summary-right {
      position: absolute;
      top: 0;
      right: 0;
      color: #161616;
      opacity: 0.5;
    }
  }

  .bottom-button {
    cursor: pointer;
    background: #161616;
    color: #fff;
    padding: 0.8rem;
    border-radius: 1rem;
    font-weight: bold;
    width: 100%;

    &.cancel {
      color: #161616;
      background: #fff;
    }
  }
}

.spinner {
  width: 100px;
  height: 100px;
  background-color: #333;
  opacity: 0.3;

  margin: 100px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    -webkit-transform: perspective(120px)
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg)
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
