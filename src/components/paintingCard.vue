<template>
<router-link :to="`/${artist}/${id}`">
  <m-card :style="cssVars">
        <m-card-primary-action ripple>
          <m-card-media >
            <div class="painting__img" :style="{backgroundImage: `url(${painting.imageURL})` }"></div>
            <m-typography class="painting__title">
              <m-typo-headline :level="6">
                {{ painting.title }}
              </m-typo-headline>
            </m-typography>
        </m-card-media>
      </m-card-primary-action>
  </m-card>
</router-link>
</template>

<script>
import palette from '../assets/palette'
import Vue from 'vue'

import Card from 'material-components-vue/dist/card'
import Headline from 'material-components-vue/dist/typography'

Vue.use(Card)
Vue.use(Headline)

export default {
  name: 'Painting',
  props: {
    id: String,
    artist: String,
    mode: String,
    painting: Object
  },
  data () {
    return {
      palette
    }
  },
  computed: {
    cssVars () {
      return {
        '--mdc-theme-surface': this.palette[this.artist].mainColor_light,
        '--mdc-theme-primary': this.palette[this.artist].mainColor_heavy
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("~material-components-vue/dist/card/card.min.css");
  @import url("~material-components-vue/dist/typography/typography.min.css");

  .painting__img {
    background-size: cover;
    background-position: center 75%;
    border-radius: 4px 4px 0 0;
    padding-top: 100%;
    width: 100%;
  }

  .painting__title {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--mdc-theme-surface);
    color: var(--mdc-theme-primary);
    height: 15%;
    margin-top: -15%;
  }
</style>
