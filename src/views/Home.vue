<template>
  <div class="home">
    <h1>Amazing Picture Gallery</h1>

    <form @submit.prevent="handleSubmit">
      <fieldset>
        <label>Your Name</label>
        <input type="text" v-model="formData.userName" placeholder="John Smith"/>

        <label>Artist Name</label>
        <select v-model="formData.artistName">
          <option value="klimt">Gustav Klimt</option>
          <option value="vanGogh">Vincent van Gogh</option>
        </select>
        <label>Painting Name</label>
        <select v-model="formData.paintingId" :disabled="formData.artistName === null">
          <option v-for="(painting, index) in $store.state[formData.artistName]"
                  :value="painting.id"
                  :key="index">{{ painting.title }}
          </option>
        </select>

        <label>Review</label>
        <textarea v-model="formData.reviewText" placeholder="I like this artist because of ..."></textarea>
      </fieldset>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      formData: {
        userName: '',
        artistName: null,
        paintingId: null,
        reviewText: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addReview'
    ]),
    handleSubmit () {
      const { userName, artistName, paintingId, reviewText } = this.formData
      const review = {
        userName,
        artistName,
        paintingId,
        reviewText
      }
      this.addReview(review)

      this.formData = {
        userName: '',
        artistName: null,
        paintingId: null,
        reviewText: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'paintingsCount',
      'getOilPaintings'
    ])
  }
}
</script>

<style scoped>
  .home {
    align-self: flex-start;
    margin: 60px auto 0;
  }

  h1 {
    grid-column: 1 / span 2;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: none;
  }

  label {
    font-size: 0.875em;
    margin-top: 20px;
    text-align: left;
  }

  input,
  select,
  textarea {
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 1em;
    margin-top: 4px;
    padding: 4px 8px;
  }

  input:focus,
  textarea:focus {
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.3);
  }

  textarea {
    font-family: inherit;
    height: 100px;
    resize: none;
  }

  button {
    background: transparent;
    border: 1px solid #333;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    height: 42px;
    margin-top: 20px;
    padding: 0 60px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: whitesmoke;
    padding-top: 15px;
  }

  li {
    border-bottom: 1px solid #333;
    margin: 15px 2vw;
    text-align: left;
    padding-bottom: 15px;
  }

  li h3 {
    margin-bottom: -5px;
  }

  li span {
    font-size: 0.875em;
  }

  li p {
    margin-top: 10px;
  }
</style>
