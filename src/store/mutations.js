export default {
  appendReview: (state, review) => {
    state[review.artistName][review.paintingId].reviews.push(review)
  }
}
