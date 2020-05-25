import Vue from 'vue';
import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();

const plugin = function(vue) {
  vue.prototype.$pokedex = pokedex;
};

Vue.use(plugin);

export default ({ app }, inject) => {
  app.$pokedex = pokedex;
};
