export default {
  addReview: ({ commit }, payload) => {
    commit('appendReview', payload)
  }
}
