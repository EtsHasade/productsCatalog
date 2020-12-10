import { shopService } from '../../service/shop-service.js'

export const shopsStore = {
    state: {
        shops: [],
        products: []
    },
    getters: {
        shopsToShow() {
            return state.shops
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