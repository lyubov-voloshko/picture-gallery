<template>
  <div class="paintingWall" :style="cssVars">
    <ul class="paintingNav">
      <router-link v-for="(painting) in currentArtistPainitings"
        class="link"
        :class="{ link_active: painting.id === $route.params.id}"
        :key="painting.id"
        :to="`/${artist}/${painting.id}`">
        {{painting.title}}
      </router-link>
    </ul>

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
        '--link-color': this.mode === 'light' ? this.palette[this.artist].mainColor_heavy : this.palette[this.artist].mainColor_light,
        // '--link-color-active': this.mode === 'light' ? this.palette[this.artist].mainColor_heavy : this.palette[this.artist].mainColor_light,
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

  .paintingWall {
    flex: 1 0 auto;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
    background: var(--bg-color);
    max-height: calc(100vh - 112px);
  }

  .paintingNav {
    flex-shrink: 0;
    list-style: none;
    padding: 20px 0;
  }

  .link {
    color: var(--link-color);
    padding: 0 10px;
    text-decoration: none;
  }

  .link:hover {
    color: var(--mdc-theme-text-primary-on-background);
  }

  .link_active {
    /* font-weight: 600; */
    text-shadow: 1px 0 var(--link-color)
  }

  .link_active:hover {
    text-shadow: 1px 0 var(--mdc-theme-text-primary-on-background)
  }

  .painting-router-animation-enter-active {
    animation: fade-in 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  .painting-router-animation-leave-active {
    animation: fade-out 1s;
  }

  @keyframes fade-in {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
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
