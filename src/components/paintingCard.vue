<template>
  <router-link :to="`/${artist}/${id}`">
    <div :style="cssVars">
      <div class="painting__img" :style="{backgroundImage: `url(${painting.imageURL})` }"></div>
      <span>{{ painting.title }}</span>
    </div>
  </router-link>
</template>

<script>
import palette from '../assets/palette'

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

<style scoped>
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
