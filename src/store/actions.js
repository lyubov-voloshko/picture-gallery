import db from './firebase'
import { firestoreAction } from 'vuexfire'

export default {
  addReview: ({ commit }, payload) => {
    commit('appendReview', payload)
  },

  getArtists: firestoreAction(({ bindFirestoreRef }) => {
    console.log('bring artists');
    return bindFirestoreRef('artists', db.collection('artists'))
  }),

  getPainting: firestoreAction(({ bindFirestoreRef }, id) => {
    return bindFirestoreRef('currentPainiting', db.collection('paintings').doc(id))
  }),

  getPaintings: firestoreAction(({ bindFirestoreRef }, artist) => {
    var artistRef = db.collection('artists').doc(artist);
    return bindFirestoreRef('currentArtistPainitings', db.collection('paintings').where('artist', '==', artistRef))
  }),

  addPainting: firestoreAction(({ bindFirestoreRef }, painting) => {
    painting.artist = db.collection('artists').doc(painting.artist);
    return db.collection('paintings').add(painting)
  })
}
