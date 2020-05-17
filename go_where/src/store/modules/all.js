const all = {
  state: {
    city: '北京',
    search: 'aaaa'
  },
  mutations: {
    'SetSearch': (state, newSearch) => {
      state.search = newSearch
    }
  },
  actions: {
    setSearch: ({commit, state}, newSearch) => {
      return commit('SetSearch', newSearch)
    }
  }
}
export default all
