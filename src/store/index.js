import Vue from 'vue'
import Vuex from 'vuex'
import { shopStore } from './module/shop-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        shopStore
    }
})