<template>
  <div class="home" :style="cssVars">
    <m-typography class="title">
      <m-typo-headline :level="4">Amazing Picture Gallery</m-typo-headline>
    </m-typography>

    <form @submit.prevent="submitReview">
      <m-text-field v-model="formData.userName" id="user-name">
        <m-floating-label for="user-name">Your Name</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-select v-model="formData.artistName">
        <option v-for="(artist, index) in artists" :key="index" :value="artist.id" :selected="formData.artistName === artist.id">
          {{artist.name}}
        </option>
        <m-floating-label
          slot="label"
          :floatAbove="formData.artistName !== null">
          Artist Name
        </m-floating-label> 
        <m-line-ripple slot="line"/>
      </m-select>

      <m-select v-model="formData.paintingId" :disabled="formData.artistName === null">
        <option
          v-for="(painting, index) in $store.state[formData.artistName]"
          :key="index"
          :value="painting.id">
            {{ painting.title }}
          </option>
        <m-floating-label
          slot="label"
          :floatAbove="selected !== null">
          Painting Name
        </m-floating-label> 
        <m-line-ripple slot="line"/>
      </m-select>

      <m-text-field v-model="formData.reviewText" id="user-review" textarea>
        <m-floating-label for="user-review">Review</m-floating-label>
      </m-text-field>

      <m-button outlined type="submit">
        Submit
      </m-button>
    </form>

    <form @submit.prevent="submitPainting" id="painting-form">
      <m-text-field v-model="formPainting.title" id="painting-title">
        <m-floating-label for="painting-title">Title</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-select v-model="formPainting.artist">
        <option value="klimt" :selected="formPainting.artist === 'klimt'">
          Gustav Klimt
        </option>
        <option value="vanGogh" :selected="formPainting.artist === 'vanGogh'">
          Vincent van Gogh
        </option>
        <m-floating-label
          slot="label"
          :floatAbove="formPainting.artist !== null">
          Artist
        </m-floating-label> 
        <m-line-ripple slot="line"/>
      </m-select>

      <m-text-field v-model="formPainting.medium" id="painting-medium">
        <m-floating-label for="painting-medium">Medium</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-text-field v-model="formPainting.year" id="painting-year">
        <m-floating-label for="painting-year">Year</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-text-field v-model="formPainting.dimensions" id="painting-dimensions">
        <m-floating-label for="painting-dimensions">Dimensions</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-text-field v-model="formPainting.location" id="painting-location">
        <m-floating-label for="painting-location">Location</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-text-field v-model="formPainting.imageURL" id="painting-imageURL">
        <m-floating-label for="painting-imageURL">Image URL</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-button outlined>
        Submit
      </m-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Vue from 'vue'
import palette from './../assets/palette'

import Headline from 'material-components-vue/dist/typography'
import TextField from 'material-components-vue/dist/text-field'
import FloatingLabel from 'material-components-vue/dist/floating-label'
import LineRipple from 'material-components-vue/dist/line-ripple'
import Select from 'material-components-vue/dist/select'
import Button from 'material-components-vue/dist/button'

Vue.use(Headline)
Vue.use(TextField)
Vue.use(FloatingLabel)
Vue.use(LineRipple)
Vue.use(Select)
Vue.use(Button)

export default {
  name: 'home',
  props: {
    mode: String
  },
  data () {
    return {
      palette,
      formData: {
        userName: '',
        artistName: null,
        paintingId: null,
        reviewText: ''
      },
      formPainting: {
        title: '',
        artist: '',
        medium: '',
        year: '',
        dimensions: '',
        location: '',
        imageURL: ''
      }
    }
  },
  methods: {
        ...mapActions(['addReview', 'addPainting', 'getArtists']),

    submitReview () {
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
    },

    submitPainting () {
      const { title, artist, medium, year, dimensions, location, imageURL } = this.formPainting;
      const painting = { title, artist, medium, year, dimensions, location, imageURL };
      this.addPainting(painting);
    }
  },
  computed: {
    ...mapGetters(['paintingsCount','getOilPaintings']),
    ...mapState(['artists']),
    cssVars () {
      return {
        '--input-bgcolor': this.palette.common[this.mode].accentedColor,
        '--input-disabled-bgcolor': this.palette.common[this.mode].extinguishedColor
      }
    }
  },
  mounted () {
    this.getArtists();
  }
}
</script>

<style scoped>
  @import url("~material-components-vue/dist/typography/typography.min.css");
  @import url("~material-components-vue/dist/text-field/text-field.min.css");
  @import url("~material-components-vue/dist/floating-label/floating-label.min.css");
  @import url("~material-components-vue/dist/line-ripple/line-ripple.min.css");
  @import url("~material-components-vue/dist/select/select.min.css");
  @import url("~material-components-vue/dist/button/button.min.css");

  .home {
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-gap: 20px;
    align-items: flex-start;
    margin: 60px auto 0;
    width: 70%;
  }

  .title {
    grid-column: 1 / span 2;
    color: var(--mdc-theme-primary);
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    margin-top: 32px;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label,
  .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {
    color: var(--mdc-theme-primary);
  }

  .mdc-select--focused .mdc-select__dropdown-icon {
    filter: grayscale(1);
  }

  .mdc-text-field:not(.mdc-text-field--disabled),
  .mdc-select:not(.mdc-select--disabled) {
    background: var(--input-bgcolor);
  }

  .mdc-select--disabled {
    background: var(--input-disabled-bgcolor);
  }

  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: rgba(256, 0, 0, 0.87);
  }

  #user-review {
    resize: none;
  }

  button {
    margin-left: auto;
  }
</style>
