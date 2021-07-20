import {SET_PORTFOLIO} from './mutation-types/portfolio'
import {SET_STOCKS} from './mutation-types/stocks'


import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
    .then(res => res.json())
    .then(data => {
        if(data) {
            const {stocks, funds, stockPortfolio} = data

            const portfolio = {
                funds,
                stockPortfolio
            }

            commit(SET_STOCKS,stocks)
            commit(SET_PORTFOLIO,portfolio)
        }
    })
}