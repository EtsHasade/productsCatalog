import { storeService } from '../../service/store-service.js'

export const storesStore = {
    state: {
        stores: [],
    },
    getters: {
        storesToShow() {
            return state.stores
        }
    },
    mutations: {
        setStores(state, { stores }) {
            state.stores = stores
        }
    },
    actions: {
        async setStores({ commit }) {
            try {
                const stores = await storeService.query()
                commit({ type: 'setStores', stores })
            } catch (err) {
                console.log('err', err);
            }
        }
    }
}