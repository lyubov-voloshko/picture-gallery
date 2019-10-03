<template>
  <div>
    <div :style="cssVars" class="mainCard">
      <m-typography>
        <m-typo-headline :level="4" class="painting__title">
          {{ artistName }}
        </m-typo-headline>
      </m-typography>
      <blockquote v-html="artistQuotes"></blockquote>
    </div>
    <div class="paitingsSet">
      <Painting v-for="(painting, index) in this.$store.state[artist]"
        :key="index"
        :index="index"
        :painting="painting"
        :artist="artist"
        :mode="mode"
      />
    </div>
  </div>
</template>

<script>
import palette from '../assets/palette'
import Vue from 'vue'
import { mapState } from 'vuex'

import Painting from '../components/paintingCard'

import Card from 'material-components-vue/dist/card'
import Headline from 'material-components-vue/dist/typography'

Vue.use(Card)
Vue.use(Headline)

export default {
  props: {
    artistName: String,
    artistQuotes: String, 
    artist: String,
    mode: String
  },
  components: {
    Painting
  },
  data () {
    return {
      palette
    }
  },
  computed: {
    cssVars () {
      if (this.mode === 'light') {
      return {
        '--mdc-theme-surface': this.palette[this.artist].mainColor_accented_dark,
        '--mdc-theme-primary': this.palette[this.artist].mainColor_heavy
      }} else return {
        '--mdc-theme-surface': this.palette[this.artist].mainColor_heavy,
        '--mdc-theme-primary': this.palette[this.artist].mainColor_light
      }
    }
  }
}
</script>

<style scoped>
  @import url("~material-components-vue/dist/card/card.min.css");
  @import url("~material-components-vue/dist/typography/typography.min.css");

  .paitingsSet {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: auto;
    padding: 2% 5%;
    transition: all 400ms ease;
  }
  .mainCard {
    background: var(--mdc-theme-surface);
    color: var(--mdc-theme-primary);
    text-align: left;
    padding: 32px 5%;
  }

  blockquote {
    box-sizing: border-box;
    line-height: 1.5em;
    margin-top: 30px;
    padding-right: 30px;
  }

  blockquote >>> p {
    margin: 0.75em 0;
  }
</style>
