import { shopService } from '../../service/shop-service.js'

export const shopStore = {
    state: {
        shops: [],
        products: []
    },
    getters: {
        shopsToShow(state) {
            return state.shops
        },
        productsToShow(state) {
            const shops = state.shops
            const products = []
            shops.forEach(shop => {
                products.push(...shop.Products)
            })
            return products
        }
    },
    mutations: {
        setShops(state, { shops }) {
            state.shops = shops
        }
    },
    actions: {
        async setShops({ commit }) {
            try {
                const shops = await shopService.query()
                commit({ type: 'setShops', shops })
            } catch (err) {
                console.log('err', err);
            }
        }
    }
}