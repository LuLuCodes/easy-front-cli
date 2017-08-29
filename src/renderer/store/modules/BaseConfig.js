const state = {
  appType: 'admin',
  css: [],
  ajax: true,
  store: [],
  eslint: true,
  name: '',
  version: '1.0.0',
  desc: '',
  git: '',
  saveDirectory: ''
}

const mutations = {
  SAVE_BASE_CONFIG (state, {appType, css, ajax, store, eslint, name, version, desc, git}) {
    state.appType = appType
    state.css.splice(0, state.css.length, ...css)
    state.ajax = ajax
    state.store.splice(0, state.store.length, ...store)
    state.eslint = eslint
    state.name = name
    state.version = version
    state.desc = desc
    state.git = git
  },
  RESET_BASE_CONFIG (state) {
    state.appType = 'admin'
    state.css.splice(0, state.css.length)
    state.ajax = true
    state.store.splice(0, state.store.length)
    state.eslint = true
    state.name = ''
    state.version = '1.0.0'
    state.desc = ''
    state.git = ''
  },
  SAVE_DIRECTORY_CONFIG (state, saveDirectory) {
    state.saveDirectory = saveDirectory
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
