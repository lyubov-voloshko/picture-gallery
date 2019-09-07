<template>
  <div class="picture" :style="cssVars">
    <img :src=painting.imageURL />

    <div class="info">
      <div class="tabs">
        <button class="tab"
                :class="{ tab_active: isActive('description') }"
                @click="handleSwitchTab('description')">Description</button>
        <button class="tab"
                :class="{ tab_active: isActive('reviews') }"
                @click="handleSwitchTab('reviews')">Reviews</button>
      </div>
      <div class="tabContent" :class="{ tabContent_active: isActive('description') }">
        <h1>{{ painting.title }}</h1><span>painted in {{ painting.year }}</span>
        <p class="paintedBy">by <router-link :to="`/${$route.params.author}`" class="authorName">{{ painting.author }}</router-link></p>
        <p>{{ painting.medium }}</p>
        <p>{{ painting.location }}</p>
      </div>
      <div class="tabContent tabContent_floating" :class="{ tabContent_active: isActive('reviews') }">
        <ul class="reviews">
          <li v-for="(review, index) in painting.reviews" :key="index" class="review">
            <h3> {{ review.userName }} </h3>
            <p> {{ review.reviewText }} </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    mode: String
  },
  data () {
    return {
      painting: {},
      tabActive: 'description',
      artistThemes: {
        vanGogh: {
          dark: {
            bgColor: '#2c3e50',
            bgColorInscription: '#000',
            textColorInscription: '#D0DFE3',
            linkColorInscription: '#7C9FBE',
            boxShadow: 'inset 0 0 4px 1px rgba(255,255,255,0.75)',
            boxShadowHover: '0 0 3px 2px rgba(255,255,255,0.6)'
          },
          light: {
            bgColor: '#D0DFE3',
            bgColorInscription: '#fff',
            textColorInscription: '#2c3e50',
            linkColorInscription: '#96B8C4',
            boxShadow: 'inset 0 0 4px 2px rgba(0,0,0,0.3)',
            boxShadowHover: '0 0 2px 1px rgba(0,0,0,0.3)'
          }
        },
        klimt: {
          dark: {
            bgColor: '#5f1b00',
            bgColorInscription: '#000',
            textColorInscription: '#F9EC88',
            linkColorInscription: '#f3b75b',
            boxShadow: 'inset 0 0 4px 1px rgba(255,255,255,0.75)',
            boxShadowHover: '0 0 3px 2px rgba(255,255,255,0.6)'
          },
          light: {
            bgColor: '#F9EC88',
            bgColorInscription: '#fff',
            textColorInscription: '#5f1b00',
            linkColorInscription: '#cc7f2a',
            boxShadow: 'inset 0 0 4px 2px rgba(0,0,0,0.3)',
            boxShadowHover: '0 0 2px 1px rgba(0,0,0,0.3)'
          }
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
      const cardTheme = this.artistThemes[this.$route.params.author]
      console.log(this.mode)
      console.log(cardTheme[this.mode])
      return {
        '--bg-color': cardTheme[this.mode].bgColor,
        '--bg-color-inscription': cardTheme[this.mode].bgColorInscription,
        '--text-color-inscription': cardTheme[this.mode].textColorInscription,
        '--link-color-inscription': cardTheme[this.mode].linkColorInscription,
        '--box-shadow': cardTheme[this.mode].boxShadow,
        '--box-shadow-hover': cardTheme[this.mode].boxShadowHover
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
  .picture {
    flex: 1 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background: var(--bg-color);
    box-sizing: border-box;
    padding: 42px 5%;
    height: calc(100vh - 64px);
    transition: all 400ms ease;
  }

  .info {
    position: relative;
    background: var(--bg-color-inscription);
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
    color: var(--text-color-inscription);
    padding: 0 20px 30px;
    text-align: right;
    transition: all 400ms ease;
  }

  .tabs {
    display: flex;
    width: 100%;
  }

  .tab {
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    height: 32px;
    margin: 10px 20px 0 0;
  }

  .tab_active {
    border-bottom: 1px solid var(--text-color-inscription);
  }

  .tabContent {
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

  .review {
    margin-left: 0;
    text-align: left;
  }

  img {
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);
    height: 100%;
  }

  h1 {
    font-size: 1.5em;
    margin: 25px 0 5px;
  }

  .paintedBy {
    margin-bottom: 25px;
  }

  .authorName {
    color: var(--link-color-inscription);
    font-weight: 500;
  }

</style>
