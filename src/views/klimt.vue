<template>
  <div>
    <Artist              
      :artistName="'Gustav Klimt'"
      :artistQuotes = "`<b>All art is erotic.</b>
        <p>
          I have the gift of neither the spoken nor the written word, especially if I have to say something about myself
          or my work. Whoever wants to know something about me -as an artist, the only notable thing- ought to look
          carefully at my pictures and try and see in them what I am and what I want to do.
        </p>`"
      :artist="'klimt'"
      :mode="mode"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Artist from '../components/artistPage'

export default {
  props: {
    mode: String
  },
  components: {
    Artist
  },
}
</script>
