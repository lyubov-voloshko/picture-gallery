export default {
  paintingsCount: (state) => {
    return state.vanGogh.length + state.klimt.length
  },

  getOilPaintings: (state) => {
    return state.paintings.filter((painting) => {
      return painting.medium === 'Oil, canvas'
    });
  }

  
}
