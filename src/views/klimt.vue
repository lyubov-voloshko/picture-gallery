<template>
  <div class="klimt">
    <header>
      <h1>Gustav Klimt</h1>

      <blockquote>
        <b>All art is erotic.</b>
        <p>
          I have the gift of neither the spoken nor the written word, especially if I have to say something about myself
          or my work. Whoever wants to know something about me -as an artist, the only notable thing- ought to look
          carefully at my pictures and try and see in them what I am and what I want to do.
        </p>
      </blockquote>
    </header>
    <Painting v-for="(painting, index) in klimt"
              :key="index"
              :index="index"
              :painting="painting"
              :artist="'klimt'"
              :mode="mode"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Painting from '../components/paintingCard'

export default {
  props: {
    mode: String
  },
  components: {
    Painting
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'klimt'
    ])
  }
}
</script>

<style scoped>
  .klimt {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: auto;
    padding: 1% 15%;
    transition: all 400ms ease;
  }
  header {
    grid-column: 1 / span 2;
    background-color:#f3b75b;
    box-shadow: inset 0 0 4px 2px rgba(0,0,0,0.3);
    text-align: left;
    padding: 20px 30px 0;
  }

  blockquote {
    box-sizing: border-box;
    line-height: 1.5em;
    margin-top: 30px;
    padding-right: 30px;
  }

  blockquote p {
    margin: 0.75em 0;
  }
</style>
