<template>
  <div v-if="currentPainiting" class="painting" :style="cssVars">

    <img :src=currentPainiting.imageURL />

    <div>
      <div>
        <button @click.native="handleSwitchTab('description')" :active="isActive('description')">
          Description
        </button>
        <button @click.native="handleSwitchTab('reviews')" :active="isActive('reviews')">
          Reviews
        </button>
      </div>
      <div class="pictureInfo">
        <div class="tabContent" :class="{ tabContent_active: isActive('description') }">
          <h2>{{ currentPainiting.title }}</h2>
          <span>painted in {{ currentPainiting.year }}</span>
          <span>
            by <router-link :to="`/${$route.params.author}`" class="authorName">{{ currentPainiting.artist.name }}</router-link>
          </span>
          <span>{{ currentPainiting.medium }}</span>
          <span>{{ currentPainiting.location }}</span>
        </div>

        <div class="tabContent tabContent_floating" :class="{ tabContent_active: isActive('reviews') }">
          <ul class="paintingReviews">
            <li v-for="(review, index) in currentPainiting.reviews" :key="index" class="listItem">
              <span>{{ review.userName }}</span>
              <span>{{ review.reviewText }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import palette from './../assets/palette'

export default {
  name: 'PaintingView',
  props: {
    mode: String,
    currentPainiting: {}
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
  computed: {
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
    handleSwitchTab (type) {
      this.tabActive = type
    },
    isActive (type) {
      if (this.tabActive === type) {
        return true
      }
    }
  }
}
</script>

<style scoped>
  .painting {
    position: fixed;
    top: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    box-sizing: border-box;
    color: var(--mdc-theme-primary);
    padding: 0 5% 42px;
    height: calc(100vh - 212px);
    transition: all 400ms ease;
    width: 100%;
  }

  .pictureInfo {
    position: relative;
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
    left: 0;
    display: none;
    height: calc(100% - 60px);
    overflow: scroll;
    padding: 0;
    width: 100%;
  }

  .tabContent_active {
    display: initial;
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

  .listItem {
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

<style>
  .paintingReviews .mdc-list-item__secondary-text {
    text-overflow: unset;
    white-space: initial !important;
    overflow: unset;
  }
</style>
