<template>
  <div class="vanGogh">
    <header>
      <h1>Vincent van Gogh</h1>

      <blockquote>
        <b>The laws of the colours are unutterably beautiful, just because they are not accidentals.</b>
        <p>
          In the same way that people nowadays no longer believe in fantastic miracles, no longer believe in a God ... ,
          in the same way, ... , I think that in art, the old-fashioned idea of innate genius, inspiration, etc.
        </p>
        <p>
          Anyone who says — oh, it must all come naturally — is making light of it.
          However much one knows instinctively, it’s precisely then that one must redouble one’s efforts, in my view,
          to get from instinct to REASON.
        </p>
      </blockquote>
    </header>
    <Painting v-for="(painting, index) in vanGogh" :key="index" :index="index" :painting="painting" theme="vanGogh"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Painting from '../components/painting'

export default {
  components: {
    Painting
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'vanGogh'
    ])
  }
}
</script>

<style scoped>
  .vanGogh {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 0 10%;
  }
  header {
    grid-column: 1 / span 2;
    background-color: #96B8C4;
    box-shadow: inset 0 0 4px 2px rgba(0,0,0,0.3);
    text-align: left;
    padding: 20px 30px 0;
  }

  blockquote {
    box-sizing: border-box;
    line-height: 1.5em;
    margin-top: 30px;
    padding-right: 30px;
    //width: 60%;
  }

  blockquote p {
    margin: 0.75em 0;
  }
</style>
