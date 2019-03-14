const mutations = {
  SET_STATE: (state, { prop, value }) => {
    state[prop] = value
  },
  setMenuOpen (state, value) {
  	state.isMenuOpen = value
  }
}

export default mutations
