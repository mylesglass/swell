export const state = () => ({
  introItems: [],
  serviceItems: [],
  contactItems: [],
  testimonialItems: [],
  instagramItems: []
})

export const mutations = {
  setIntroItems (state, payload) {
    state.introItems = payload
  },

  setServiceItems (state, payload) {
    state.serviceItems = payload
  },

  setContactItems (state, payload) {
    state.contactItems = payload
  },

  setTestimonialItems (state, payload) {
    state.testimonialItems = payload
  },

  setInstagramItems (state, payload) {
    state.instagramItems = payload
  }
}

export const actions = {
  async loadIntro ({ commit }) {
    const content = await import('~/content/intro.json')
    commit('setIntroItems', content)
  },

  async loadServices ({ commit }) {
    const content = await import('~/content/services.json')
    commit('setServiceItems', content)
  },

  async loadContact ({ commit }) {
    const content = await import('~/content/contact.json')
    commit('setContactItems', content)
  },

  async loadTestimonials ({ commit }) {
    const content = await import('~/content/testimonials.json')
    commit('setTestimonialItems', content)
  },

  async loadInstagram ({ commit }) {
    const content = await import('~/content/instagram.json')
    commit('setInstagramItems', content)
  }
}
