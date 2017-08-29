const state = {
  modules: []
}

const mutations = {
  SAVE_ADMIN_MODULE (state, modules) {
    state.modules.splice(0, state.modules.length, ...modules)
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
