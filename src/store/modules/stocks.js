import { RND_STOCKS, SET_STOCKS } from '../mutation-types/stocks';
import { BUY_STOCK } from '../mutation-types/portfolio';
import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const getters = {
  stocks: state => state.stocks
};

const mutations = {
  [SET_STOCKS]: (state, stocks) => {
    state.stocks = stocks;
  },

  [RND_STOCKS]: state => {}
};

const actions = {
  buyStocks: ({ commit }, order) => commit(BUY_STOCK, order),
  initStocks: ({ commit }) => commit(SET_STOCKS, stocks),
  randomizeStocks: ({ commit }) => commit(RND_STOCKS)
};

export default {
  state,
  getters,
  mutations,
  actions
};
