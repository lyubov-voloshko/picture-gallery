<template>
  <div class="page">
    <Artist
      :artistName="'Vincent van Gogh'"
      :artistQuotes = "`<b>The laws of the colours are unutterably beautiful, just because they are not accidentals.</b>
      <p class='paragraph'>
          In the same way that people nowadays no longer believe in fantastic miracles, no longer believe in a God ... ,
          in the same way, ... , I think that in art, the old-fashioned idea of innate genius, inspiration, etc.
        </p>
        <p>
          Anyone who says — oh, it must all come naturally — is making light of it.
          However much one knows instinctively, it’s precisely then that one must redouble one’s efforts, in my view,
          to get from instinct to REASON.
        </p>`"
      :artist="'vanGogh'"
      :mode="mode"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Artist from '../components/artistPage'
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  props: {
    mode: String
  },
  components: {
    Artist
  },
  computed: {
    ...mapState(['testPaintings',]),
  },
  methods: {
    ...mapActions(['getPaintings']),
  },
  mounted () {
    this.getPaintings('vanGogh');
  }
}
</script>
