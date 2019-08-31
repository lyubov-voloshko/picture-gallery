<template>
  <div class="painting" :style="cssVars">
    <div class="painting__img"
         :style="{backgroundImage: `url(${painting.imageURL})` }"></div>
    <h2>{{ painting.title }}</h2>
    <p><b>Location: </b>{{ painting.location }}</p>
    <router-link :to="`/vanGogh/${index}`">more info</router-link>
  </div>
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
    padding: 15px;
    transition: all 400ms;
  }

  .painting:hover {
    box-shadow: inset 0 0 0 0 rgba(0,0,0,0), 0 0 4px 2px rgba(0,0,0,0.3);
  }

  .painting__img {
    background-size: cover;
    background-position: center center;
    height: 150px;
    width: 100%;
  }

  .painting h2 {
    line-height: 1.15em;
    margin: 18px 0 10px;
  }
</style>
