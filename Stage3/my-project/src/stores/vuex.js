import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        author: 'jing',
        search: {
            value: ''
        }
    },
    getters: {
        getAuthor(state) {
            return state.search
        }
    },

    mutations: {
        setAuthor(state, data) {
            state.search = data
        }
    },
    actions: {
        setAuthor(context, data) {
            // window.console.log(data);
            context.commit('setAuthor', data)
        }
    }
})