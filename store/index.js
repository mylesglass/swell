export const state = () => ({
  introItems: []
})

export const mutations = {
  setIntroItems (state, payload) {
    state.introItems = payload
  }
}

export const actions = {
  async loadIntro ({ commit }) {
    // eslint-disable-next-line
    const content = await import('~/content/intro.json')
    commit('setIntroItems', content)
  }
}
