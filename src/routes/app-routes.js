import Home from '../pages/Home.vue'
import Stocks from '../pages/Stocks.vue'
import Portfolio from '../pages/Portfolio.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/stocks', component: Stocks},
  {path: '/portfolio', component: Portfolio},
  
]