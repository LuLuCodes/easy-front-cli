const state = {
  modules: []
}

const mutations = {
  SAVE_ADMIN_MODULE (state, modules) {
    state.modules.splice(0, state.modules.length, ...modules)
  },
  RESET_ADMIN_MODULE (state) {
    state.modules.splice(0, state.modules.length)
  }
}

const actions = {
  someAsyncTask ({ commit }) {
  }
}

export default {
  state,
  mutations,
  actions
}
