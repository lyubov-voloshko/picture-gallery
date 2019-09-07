import vanGogh from '../data/van-gogh'
import klimt from '../data/klimt'

export default {
  vanGogh,
  klimt,
  reviews: [],
  paintings: [...vanGogh, ...klimt]
}
