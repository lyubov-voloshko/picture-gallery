<template>
  <router-link class="painting" :style="cssVars" :to="`/${this.artist}/${index}`">
    <div class="painting__img"
         :style="{backgroundImage: `url(${painting.imageURL})` }"></div>
    <h3>{{ painting.title }}</h3>
  </router-link>
</template>

<script>
export default {
  name: 'Painting',
  props: {
    index: Number,
    artist: String,
    mode: String,
    painting: Object
  },
  data () {
    return {
      artistThemes: {
        vanGogh: {
          dark: {
            bgColor: '#2c3e50',
            textColor: '#D0DFE3',
            boxShadow: 'inset 0 0 4px 1px rgba(255,255,255,0.75)',
            boxShadowHover: '0 0 3px 2px rgba(255,255,255,0.6)'
          },
          light: {
            bgColor: '#D0DFE3',
            textColor: '#2c3e50',
            boxShadow: 'inset 0 0 4px 2px rgba(0,0,0,0.3)',
            boxShadowHover: '0 0 2px 1px rgba(0,0,0,0.3)'
          }
        },
        klimt: {
          dark: {
            bgColor: '#5f1b00',
            textColor: '#f3cf7a',
            boxShadow: 'inset 0 0 4px 1px rgba(255,255,255,0.75)',
            boxShadowHover: '0 0 3px 2px rgba(255,255,255,0.6)'
          },
          light: {
            bgColor: '#F9EC88',
            textColor: '#5f1b00',
            boxShadow: 'inset 0 0 4px 2px rgba(0,0,0,0.3)',
            boxShadowHover: '0 0 2px 1px rgba(0,0,0,0.3)'
          }
        }
      }
    }
  },
  computed: {
    cssVars () {
      const cardTheme = this.artistThemes[this.artist]
      return {
        '--bg-color': cardTheme[this.mode].bgColor,
        '--text-color': cardTheme[this.mode].textColor,
        '--box-shadow': cardTheme[this.mode].boxShadow,
        '--box-shadow-hover': cardTheme[this.mode].boxShadowHover
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .painting {
    background: var(--bg-color);
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    padding: 15px;
    text-decoration: none;
    transition: all 400ms;
  }

  .painting:hover {
    box-shadow: inset 0 0 0 0 rgba(0,0,0,0), var(--box-shadow-hover);
  }

  .painting__img {
    background-size: cover;
    background-position: center center;
    padding-top: 75%;
    //height: 150px;
    width: 100%;
  }

  .painting h3 {
    line-height: 1.15em;
    margin-top: 12px;
  }
</style>
