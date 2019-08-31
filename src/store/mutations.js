export default {
  appendPainting: (state, { painting, author }) => {
    state[author].push(painting)
  }
}
