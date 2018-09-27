const mutations = {
  setBarSelected(state, data) {
    state.barSelected = data
  },
  setTransY(state, data) {
    if (data.key) {
      state[data.key] = data.value || 0
    }
  }
}

export default mutations
