<template>
  <div class="picture" :style="cssVars">
    <img :src=painting.imageURL />

    <m-card>
      <m-primary-action>
          <m-tab-bar>
            <app-m-tab-scroller class="tabs">
              <app-tab @click.native="handleSwitchTab('description')" :minWidth="true" :active="isActive('description')">
                Description
              </app-tab>
              <app-tab @click.native="handleSwitchTab('reviews')" :minWidth="true" :active="isActive('reviews')">
                Reviews
              </app-tab> 
            </app-m-tab-scroller>
          </m-tab-bar>
      </m-primary-action>
        <div class="tabContent" :class="{ tabContent_active: isActive('description') }">
          <m-typography class="tabInfo">
            <m-typo-headline :level="5" class="tabInfo__title">{{ painting.title }}</m-typo-headline>
            <m-typo-body :level="1">painted in {{ painting.year }}</m-typo-body>
            <m-typo-body :level="1" class="tabInfo__author">
              by <router-link :to="`/${$route.params.author}`" class="authorName">{{ painting.author }}</router-link>
            </m-typo-body>
            <m-typo-body :level="1">{{ painting.medium }}</m-typo-body>
            <m-typo-body :level="1">{{ painting.location }}</m-typo-body>            
          </m-typography>
        </div>
        <div class="tabContent tabContent_floating" :class="{ tabContent_active: isActive('reviews') }">
          <ul class="reviews">
            <li v-for="(review, index) in painting.reviews" :key="index" class="review">
              <h3> {{ review.userName }} </h3>
              <p> {{ review.reviewText }} </p>
            </li>
          </ul>
        </div>
    </m-card>
  </div>
</template>

<script>
import Vue from 'vue'

import { mapState } from 'vuex'
import palette from './../assets/palette'

import Card from 'material-components-vue/dist/card'
import Headline from 'material-components-vue/dist/typography'
import Body from 'material-components-vue/dist/typography'

Vue.use(Card)
Vue.use(Headline)
Vue.use(Body)

export default {
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
          linkColor: artistPallete.mainColor_accented_light,
        },
        light: {
          bgColor: artistPallete.mainColor_light,
          linkColor: artistPallete.mainColor_accented_dark,
        }
      }
    }
  },
  computed: {
    ...mapState([
      'vanGogh',
      'klimt'
    ]),
    cssVars () {
      const cardTheme = this.artistThemes[this.mode];
      return {
        '--mdc-theme-surface': this.palette.common[this.mode].bgColor,
        '--mdc-theme-primary': this.palette.common[this.mode].textColor,
        '--bg-color': cardTheme.bgColor,
        '--link-color-inscription': cardTheme.linkColor
      }
    }
  },
  methods: {
    handleSwitchTab (type) {
      this.tabActive = type
    },
    isActive (type) {
      if (this.tabActive === type) {
        return true
      }
    }
  },
  mounted () {
    this.painting = this[this.$route.params.author][this.$route.params.id]
  }
}
</script>

<style scoped>
  @import url("~material-components-vue/dist/card/card.min.css");
  @import url("~material-components-vue/dist/typography/typography.min.css");

  .picture {
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background: var(--bg-color);
    box-sizing: border-box;
    color: var(--mdc-theme-primary);
    padding: 42px 5%;
    height: calc(100vh - 112px);
    transition: all 400ms ease;
  }

  .tabContent {
    padding: 24px;
    float: left;
    clear: both;
    opacity: 0;
    transition: all 300ms;
  }

  .tabContent_floating {
    position: absolute;
    top: 60px;
    left: 20px;
  }

  .tabContent_active {
    opacity: 1;
  }

  .tabInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-end
  }

  .tabInfo__title {
    margin-bottom: 8px;
  }

  .tabInfo__author {
    margin-bottom: 20px;
  }

  .review {
    margin-left: 0;
    text-align: left;
  }

  img {
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);
    height: 100%;
  }

  .authorName {
    color: var(--link-color-inscription);
    font-weight: 500;
  }

</style>
