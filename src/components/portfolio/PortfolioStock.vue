<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small
            >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ danger: !hasSufficientQuantity }"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="isDisabled"
          >
            {{ hasSufficientQuantity ? 'Sell' : 'Less Stocks' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    hasSufficientQuantity() {
      return this.quantity <= this.stock.quantity;
    },

    isDisabled() {
      return (
        this.quantity <= 0 ||
        !Number.isInteger(+this.quantity) ||
        !this.hasSufficientQuantity
      );
    }
  },
  methods: {
    ...mapActions({
      sellStockAction: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: +this.quantity
      };
      this.sellStockAction(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
