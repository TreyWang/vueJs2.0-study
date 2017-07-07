import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  totalPrice: 0
}

const mutations = {
  increment(state, n, price){
    console.log(price);
    state.count += n;
    state.totalPrice += n*price;
  },
  decrement(state, n, price){
    state.count = state.count - n;
    state.totalPrice = state.totalPrice - n*price;
  }
}

const actions = {
  increment(context){
    context.commit('increment', 10, 100);
  }
}

const getters = {
  getTotalPrice(state){
    return state.totalPrice;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
