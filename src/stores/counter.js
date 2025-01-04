import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        products: []
    }),
    getters: {
        totalProducts() {
            return this.products.length;
        },
        getProductsByNames: (state) => (name) => {
            return state.products.filter(product => product.name === name);
        }
    },
    actions: {
       fetchProducts() {
           fetch('http://localhost:3000/laptops')
           .then(res => res.json())
           .then(data => {
               this.products = data;
           });
    }
    }
});