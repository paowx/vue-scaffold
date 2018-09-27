const getters = {
  getTransY(state, key) {
    if (key) {
      return state[key]
    }
  }
}

export default getters
