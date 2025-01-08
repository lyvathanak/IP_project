import { defineStore } from 'pinia';
import axios from 'axios';

// Pinia Store
export const useCounterStore = defineStore('counter', {
  state: () => ({
    products: [],
    searchResult: '',
  }),
  getters: {

    filteredProducts(state) {
      if(!state.searchResult){
        return state.products.filter((product) => product.name.toLowerCase().includes(state.searchResult.toLowerCase()));
      }
    }

  },
  actions: {
    async fetchProducts() {
      try {
        const urls = [
          'http://localhost:3000/laptops',
          'http://localhost:3000/cpu',
          'http://localhost:3000/motherboards',
        ];

        const [laptopsRes,cpuRes,motherboardsRes] = await Promise.all([
           axios.get(urls[0]),
           axios.get(urls[1]),
           axios.get(urls[2]),
           this.products = [...laptopsRes.data, ...cpuRes.data, ...motherboardsRes.data]
        ]);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
  },
  updateSearchResult(searchResult) {
    this.searchResult = searchResult;
  }
});