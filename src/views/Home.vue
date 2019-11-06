<template>
  <div class="home" :style="cssVars">
    <m-typography class="title">
      <m-typo-headline :level="4">Amazing Picture Gallery</m-typo-headline>
    </m-typography>
    <form @submit.prevent="handleSubmit">
      <m-text-field v-model="formData.userName" id="user-name">
        <m-floating-label for="user-name">Your Name</m-floating-label>
        <m-line-ripple slot="bottomLine"/>
      </m-text-field>

      <m-select v-model="formData.artistName">
        <option value="klimt" :selected="formData.artistName === 'klimt'">
          Gustav Klimt
        </option>
        <option value="vanGogh" :selected="formData.artistName === 'vanGogh'">
          Vincent van Gogh
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

      <m-button outlined>
        Submit
      </m-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    ]),
    cssVars () {
      return {
        '--input-bgcolor': this.palette.common[this.mode].accentedColor,
        '--input-disabled-bgcolor': this.palette.common[this.mode].extinguishedColor
      }
    }
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
    align-self: flex-start;
    margin: 60px auto 0;
  }

  .title {
    grid-column: 1 / span 2;
    color: var(--mdc-theme-primary);
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    align-items: flex-end;
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
