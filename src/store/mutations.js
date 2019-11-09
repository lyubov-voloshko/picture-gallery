import { vuexfireMutations } from 'vuexfire'

export default {
  ...vuexfireMutations,
  appendReview: (state, review) => {
    state[review.artistName][review.paintingId].reviews.push(review)
  }
}
