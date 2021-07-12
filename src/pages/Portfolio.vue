<template>
  <div>
    <h1>The Portfolio Component</h1>
    <app-portfolio-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-portfolio-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PortFolioStock from '../components/portfolio/PortfolioStock.vue';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    'app-portfolio-stock': PortFolioStock
  }
};
</script>
