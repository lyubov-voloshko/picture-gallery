<template>
  <div class="picture" :style="cssVars">
    <img :src=painting.imageURL />

    <div class="info">
      <h1>{{ painting.title }}</h1><span>painted in {{ painting.year }}</span>
      <p class="paintedBy">by <router-link :to="`/${$route.params.author}`" class="authorName">{{ painting.author }}</router-link></p>
      <p>{{ painting.medium }}</p>
      <p>{{ painting.location }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      painting: {},
      themes: {
        vanGogh: { bgColor: '#D0DFE3' },
        klimt: { bgColor: '#F9EC88' }
      }
    }
  },
  computed: {
    ...mapState([
      'vanGogh',
      'klimt'
    ]),
    cssVars () {
      return {
        '--bg-color': this.themes[this.$route.params.author].bgColor
      }
    }
  },
  mounted() {
    this.painting = this[this.$route.params.author][this.$route.params.id];
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
    height: 100%;
  }

  .info {
    background: #fff;
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
    padding: 0 20px 30px;
    text-align: right;
  }

  img {
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.3);
    height: 100%;
  }

  h1 {
    font-size: 1.5em;
    margin: 40px 0 5px;
  }

  .paintedBy {
    margin-bottom: 25px;
  }

  .authorName {
    color: #96B8C4;
  }

</style>
