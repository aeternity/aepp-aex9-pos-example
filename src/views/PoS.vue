<template>
  <div v-if="state === 'SELECT_ITEMS'" class="content">
    <div class="header">
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
    <div class="main">
      <div class="item-heading">Select Items</div>

      <div
          class="item"
          v-for="item in filteredItems"
          :key="item.id">
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">{{ item.price }} Token{{ item.price > 1 ? 's' : '' }}</div>
        <div class="item-buttons">

          <button class="item-add-button" @click="addItem(item)">+</button>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-divider"/>
      <div class="bottom-summary">Items
        <div class="bottom-summary-right">
          {{ cart.length }}
        </div>
      </div>
      <button class="bottom-button" @click="state = 'CHECKOUT'">
        🛒 Checkout
      </button>
    </div>
  </div>
  <div v-if="state === 'CHECKOUT'" class="content">
    <div class="header">
      <div class="back-button">
        <button @click="state = 'SELECT_ITEMS'"><img src="../assets/img/back-arrow.svg"></button>
        <div class="checkout-heading">Order Details</div>
      </div>
    </div>

    <div class="main">
      <div
          class="item"
          v-for="item in cartItems"
          :key="item.id">
        <div class="item-description">{{ item.description }}</div>
        <div class="item-price">{{ item.price }} Token{{ item.price > 1 ? 's' : '' }}</div>
        <div class="item-total">€ {{ item.price * pricePerToken * cart.filter(i => i.id === item.id).length }}</div>
        <div class="item-buttons">
          <button class="item-remove-button" @click="removeItem(item)">-</button>
          {{ cart.filter(i => i.id === item.id).length }}
          <button class="item-add-button" @click="addItem(item)">+</button>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-divider"/>
      <div class="bottom-summary">Total
        <div class="bottom-summary-right">
          € {{ totalPrice }} ({{ totalTokens }} Tokens)
        </div>
      </div>
      <button class="bottom-button" @click="newInvoice(totalTokens)">
        💸 Request Payment
      </button>
    </div>
  </div>
  <div v-if="state === 'REQUEST_PAYMENT'" class="content">
    <div class="header">
      <div class="payment-request-heading-1">Payment Request</div>
      <div class="payment-request-heading-2">Scan the QR Code</div>
    </div>

    <div class="main">
      <div class="qr-container"
           :class="qrdata ? 'has-qr': null">
        <div
            v-if="qrdata === null"
            class="spinner"/>
        <qrcode-vue
            v-if="qrdata"
            :value="'ZEITFESTIVAL' + JSON.stringify(qrdata)"
            :size="200"/>

      </div>
    </div>

    <div class="bottom">
      <div class="bottom-divider"/>
      <div class="bottom-summary">Total
        <div class="bottom-summary-right">
          € {{ totalPrice }} ({{ totalTokens }} Tokens)
        </div>
      </div>
      <button class="bottom-button cancel" @click="state = 'CHECKOUT'; qrdata = null;">
        Cancel Request
      </button>
    </div>
  </div>
  <div v-if="state === 'REQUEST_FUNDING'" class="content">
    <div class="header">

      <div class="payment-request-heading-1">Please fund this Point of Sales with 1 AE</div>
      <div class="payment-request-heading-2">Scan the QR Code</div>
    </div>

    <div class="main">
      <div class="qr-container"
           :class="publicKey ? 'has-qr': null">
        <div
            v-if="publicKey === null"
            class="spinner"/>
        <qrcode-vue
            v-if="publicKey"
            :value="publicKey"
            :size="200"/>

      </div>
    </div>
  </div>
  <div v-if="state === 'SETUP'" class="content">
    <div class="header">
      <div class="payment-request-heading-1">Loading, please wait</div>
    </div>
    <div class="main">
      <div class="qr-container">
        <div class="spinner"/>
      </div>
    </div>
  </div>
  <div v-if="state === 'PAID'" class="content">
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
  </div>
</template>

<script>
import aeternity from '../utils/aeternity'
import QrcodeVue from 'qrcode.vue';
import items from '../assets/content/items.json';

export default {
  name: 'PoS',
  components: {
    QrcodeVue,
  },
  data() {
    return {
      pricePerToken: 3,
      cart: [],
      filter: 'ALL',
      invoiceId: null,
      qrdata: null,
      checkPaidInterval: null,
      checkFundedInterval: null,
      state: 'SETUP',
      publicKey: null,
    };
  },
  computed: {
    filteredItems() {
      return this.filter === 'ALL' ? items : items.filter(item => item.type === this.filter)
    },
    cartItems() {
      const cartIds = this.cart.map(item => item.id);
      return items.filter(item => cartIds.includes(item.id));
    },
    totalPrice() {
      return this.cart.reduce((acc, item) => acc + item.price * this.pricePerToken, 0);
    },
    totalTokens() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },
  methods: {
    reset() {
      this.state = 'SELECT_ITEMS'
      this.cart = []
      this.invoiceId = null
      this.qrdata = null
    },
    removeItem(item) {
      const thisItems = this.cart.filter(i => i.id === item.id);
      const otherItems = this.cart.filter(i => i.id !== item.id);
      thisItems.shift();
      this.cart = otherItems.concat(thisItems);
    },
    addItem(item) {
      this.cart.push(item);
    },
    async newInvoice(price) {
      this.state = 'REQUEST_PAYMENT'
      this.invoiceId = await aeternity.pos.methods.new_invoice(price).then(r => r.decodedResult);
      this.qrdata = {invoiceId: this.invoiceId, amount: price};
      if (this.checkPaidInterval) this.clearIntervalVariable(this.checkPaidInterval)
      this.checkPaidInterval = setInterval(this.checkPaid, 1000);
    },
    clearIntervalVariable(interval) {
      if (interval) clearInterval(interval)
      interval = null;
    },
    async checkPaid() {
      if (this.state === 'REQUEST_PAYMENT') {
        const hasPaid = await aeternity.pos.methods.has_paid(this.invoiceId).then(r => r.decodedResult).catch(console.error);
        if (hasPaid) {
          this.state = 'PAID'
          this.clearIntervalVariable(this.checkPaidInterval)
        }
      }
    },
    async checkFunded() {
      if (this.state === 'REQUEST_FUNDING') {
        const balance = await aeternity.checkBalance().catch(console.error);
        if (balance > 0) {
          this.state = 'SELECT_ITEMS'
          this.clearIntervalVariable(this.checkFundedInterval)
        }
      }
    }
  },
  async mounted() {
    const keypairString = localStorage.getItem('keypair');
    let keypair = null;
    try {
      keypair = JSON.parse(keypairString);
      console.log(keypairString)
    } catch (e) {
      console.error(e);
    }
    if (!keypair) {
      keypair = aeternity.generateAccount()
      localStorage.setItem('keypair', JSON.stringify(keypair));
    }
    console.log(keypair);
    await aeternity.init(keypair);
    this.publicKey = keypair.publicKey;
    const balance = await aeternity.checkBalance();
    console.log(balance)
    if (balance > 0) {
      this.state = 'SELECT_ITEMS'
    } else {
      this.state = 'REQUEST_FUNDING'
      if (this.checkFundedInterval) this.clearIntervalVariable(this.checkFundedInterval)
      this.checkFundedInterval = setInterval(this.checkFunded, 1000);
    }
  }
}
</script>

<style lang="scss">
@use "sass:color";

html, body, #app {
  margin: 0;
  height: 100vh;

  font-family: Rubik, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #181818;
  letter-spacing: 0.03rem;
}

.content {
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
