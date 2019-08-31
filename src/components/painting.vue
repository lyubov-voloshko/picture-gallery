<template>
  <router-link class="painting" :style="cssVars" :to="`/${this.theme}/${index}`">
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
    theme: String,
    painting: Object
  },
  data () {
    return {
      themes: {
        vanGogh: { bgColor: '#D0DFE3' },
        klimt: { bgColor: '#F9EC88' }
      }
    }
  },
  computed: {
    cssVars () {
      return {
        '--bg-color': this.themes[this.theme].bgColor
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .painting {
    background: var(--bg-color);
    box-shadow: inset 0 0 4px 2px rgba(0,0,0,0.3);
    color: inherit;
    padding: 15px;
    text-decoration: none;
    transition: all 400ms;
  }

  .painting:hover {
    box-shadow: inset 0 0 0 0 rgba(0,0,0,0), 0 0 2px 1px rgba(0,0,0,0.3);
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
