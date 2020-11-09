<template>
  <div id="app" :style="cssVars" class="main">
    <div :style="topBarColors" class="header">
      <router-link to="/" class="header__name">Gallery</router-link>
      <button @click="switchTheme()">switch theme</button>
    </div>

    <div class="stickyContent">
      <div class="tabs" :style="tabsColors">
          <router-link to="/vanGogh" :active="$route.path.startsWith('/vanGogh')"
            class="tab">
            van Gogh
          </router-link>
          <router-link to="/klimt" :active="$route.path.startsWith('/klimt')"
            class="tab">
            Klimt
          </router-link>
      </div>

      <router-view :mode="currentMode" v-slot="slotProps">
        <component :is="slotProps.Component"></component>
        <!-- <transition name="artisr-router-animation"></transition> -->
      </router-view>
    </div>
  </div>
</template>

<script>
import palette from './assets/palette'

export default {
  name: 'app',
  data () {
    return {
      currentMode: 'light',
      palette
    }
  },
  methods: {
    switchTheme () {
      if (this.currentMode === 'light') {
        this.currentMode = 'dark'
      } else {
        this.currentMode = 'light'
      }
    }
    // changeTab (location) {
    //   this.$router.push(location)
    // }
  },
  computed: {
    cssVars () {
      return {
        '--mdc-theme-on-primary': this.palette.common[this.currentMode].textColor,
        '--mdc-theme-background': this.palette.common[this.currentMode].bgColor,
        '--text-color': this.palette.common[this.currentMode].textColor
      }
    },
    topBarColors () {
      return {
        '--mdc-theme-primary': this.palette.common[this.currentMode].bgColor,
        '--name-color': this.palette.common[this.currentMode].textColor
      }
    },
    tabsColors () {
      return {
        '--tabs-bgcolor': this.palette.common[this.currentMode].accentedColor
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: 100vh;
    transition: all 400ms ease;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 16px;
  }

  .header__name {
    color: inherit;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
  }

  .tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--tabs-bgcolor);
    height: 48px;
  }

  .tab {
    color: inherit;
    font-size: 0.875em;
    font-weight: 500;
    line-height: 48px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 16px;
    transition: background 400ms;
  }

  .tab:hover {
    background: rgba(0,0,0,0.04);
  }

  .main {
    background: var(--mdc-theme-background);
  }

  .stickyContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .page {
    position: fixed;
    top: 112px;
    width: inherit;
  }

  /* .artisr-router-animation-enter-active {
    animation: fade-in 1s;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .artisr-router-animation-leave-active {
    animation: fade-out 1s;
  } */

  /* @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  } */
</style>
