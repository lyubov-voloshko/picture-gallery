<template>
  <div class="home">
    <h1>Amazing Picture Gallery</h1>
    <button @click="toggleAddForm()">Add Some Painting</button>

    <form @submit="handleSubmit()" v-if="addFormShown">
      <label>Author</label>
      <input type="text" />

      <label>Painting Title</label>
      <input type="text" />

      <label>Painting location</label>
      <input type="text" />
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      addFormShown: false,
      formData: {
        author: '',

      }
    }
  },
  methods: {
    toggleAddForm () {
      this.addFormShown = !this.addFormShown
    },
    handleSubmit () {

    }
  }
}
</script>
