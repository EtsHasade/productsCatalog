import Vue from 'vue'
import Vuex from 'vuex'
import { storesStore } from './module/stores-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        storesStore
    }
})