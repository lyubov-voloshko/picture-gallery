<template>
  <div>
    <div>
      <router-link v-for="(painting) in currentArtistPainitings"
        class="link"
        :key="painting.id"
        :to="`/${artist}/${painting.id}`">
        {{painting.title}}
      </router-link>
    </div>

    <transition name="painting-router-animation">
      <router-view
        v-bind:key="$route.params.id"
        v-if="currentPainiting"
        :mode="mode"
        :currentPainiting="currentPainiting"/>
    </transition>
  </div>

</template>

<script>
import Vue from 'vue'

import { mapActions, mapState } from 'vuex'
import palette from './../assets/palette'

import Card from 'material-components-vue/dist/card'
import Headline from 'material-components-vue/dist/typography'
import Body from 'material-components-vue/dist/typography'
import List from 'material-components-vue/dist/list'

Vue.use(Card)
Vue.use(Headline)
Vue.use(Body)
Vue.use(List)

export default {
  name: 'paintingPage',
  props: {
    mode: String
  },
  data () {
    const artistPallete = palette[this.$route.params.author]
    return {
      painting: {},
      tabActive: 'description',
      palette,
      artist: this.$route.params.author,
      artistThemes: {
        dark: {
          bgColor: artistPallete.mainColor_heavy,
          linkColor: artistPallete.mainColor_accented_light
        },
        light: {
          bgColor: artistPallete.mainColor_light,
          linkColor: artistPallete.mainColor_accented_dark
        }
      }
    }
  },
  watch: {
    $route(to, from) {
      this.getPainting(this.$route.params.id)
    }
  },
  computed: {
    ...mapState(['currentPainiting', 'currentArtistPainitings']),
    cssVars () {
      const cardTheme = this.artistThemes[this.mode]
      return {
        '--mdc-theme-surface': this.palette.common[this.mode].bgColor,
        '--mdc-theme-primary': this.palette.common[this.mode].textColor,
        '--bg-color': cardTheme.bgColor,
        '--link-color-inscription': cardTheme.linkColor,
        '--mdc-theme-text-primary-on-background': cardTheme.linkColor,
        '--mdc-theme-text-secondary-on-background': this.palette.common[this.mode].textColor
      }
    }
  },
  methods: {
    ...mapActions(['getPainting', 'getPaintings'])
  },
  mounted: function () {
    this.getPainting(this.$route.params.id)
    this.getPaintings(this.$route.params.author)
  }
}
</script>

<style scoped>
  @import url("~material-components-vue/dist/card/card.min.css");
  @import url("~material-components-vue/dist/typography/typography.min.css");
  @import url("~material-components-vue/dist/list/list.min.css");

  .link {
    padding: 0 10px;
  }

  .painting-router-animation-enter-active {
    animation: fade-in 1s;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .painting-router-animation-leave-active {
    animation: fade-out 1s;
  }

  @keyframes fade-in {
    to {
      transform: translateX(-50px);
      opacity: 1;
    }
  }

  @keyframes fade-out {
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }

</style>

<style>
  .paintingReviews .mdc-list-item__secondary-text {
    text-overflow: unset;
    white-space: initial !important;
    overflow: unset;
  }
</style>
