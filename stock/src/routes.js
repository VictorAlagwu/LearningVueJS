import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import PortfolioStock from './components/portfolio/Stock.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/portfolio', name: 'portfolio', component: Portfolio },
    { path: '/portfolio/stock', name: 'portfolio-stock', component: PortfolioStock},
    { path: '/stocks', name: 'stocks', component: Stocks}
  ];