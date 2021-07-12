import { BUY_STOCK, SELL_STOCK } from '../mutation-types/portfolio';

const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  [BUY_STOCK]: (state, { stockId, stockPrice, stockQuantity }) => {
    const recordIndex = state.stocks.findIndex(el => el.id === stockId);
    const newStocks = [...state.stocks];

    if (recordIndex >= 0) {
      newStocks[recordIndex].quantity += stockQuantity;
    } else {
      newStocks.push({
        id: stockId,
        quantity: stockQuantity
      });
    }

    state.funds -= stockPrice * stockQuantity;
    state.stocks = newStocks;
  },

  [SELL_STOCK]: (state, { stockId, stockPrice, stockQuantity }) => {
    const recordIndex = state.stocks.findIndex(el => el.id === stockId);
    const newStocks = [...state.stocks];
    const record = newStocks[recordIndex];

    if (record.quantity > stockQuantity) {
      record.quantity -= stockQuantity;
    } else {
      newStocks.splice(recordIndex, 1);
    }

    state.funds += stockPrice * stockQuantity;
    state.stocks = newStocks;
  }
};
const actions = {
  sellStock({ commit }, order) {
    commit(SELL_STOCK, order);
  }
};
const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },

  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
