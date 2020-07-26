<template>
  <div id="app" :style="cssVars" class="main">
    <m-top-app-bar :style="topBarColors">
      <m-typography>
        <m-typo-headline :level="5">
          <router-link to="/">Gallery</router-link>
        </m-typo-headline>
      </m-typography>

      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <m-icon-button icon="invert_colors" @click="switchTheme()"></m-icon-button>
      </section>
    </m-top-app-bar>

    <m-top-app-bar-fixed-adjust class="stickyContent">
      <m-tab-bar scrollable :useAutomaticActivation="false" class="tabs" :style="tabsColors">
        <app-m-tab-scroller align="center">
           <app-tab href="/vanGogh" :minWidth="true" :active="$route.path.startsWith('/vanGogh')">
            van Gogh
          </app-tab>
          <app-tab href="/klimt" :minWidth="true" :active="$route.path.startsWith('/klimt')">
            Klimt
          </app-tab>
        </app-m-tab-scroller>
      </m-tab-bar>

      <transition name="artisr-router-animation">
        <router-view :mode="currentMode"/>
      </transition>
    </m-top-app-bar-fixed-adjust>
  </div>
</template>

<script>
import palette from './assets/palette'
import Vue from 'vue'

import Button from 'material-components-vue/dist/button'
import Headline from 'material-components-vue/dist/typography'
import NavBar from 'material-components-vue/dist/top-app-bar'
import IconButton from 'material-components-vue/dist/icon-button'
import TabBar from 'material-components-vue/dist/tabs'
import TabScroller from './components/material/TabScroller'
import Tab from './components/material/Tab'

Vue.use(Button)
Vue.use(Headline)
Vue.use(NavBar)
Vue.use(IconButton)
Vue.use(TabBar)
Vue.use(Tab)

Vue.component('app-tab', Tab)
Vue.component('app-m-tab-scroller', TabScroller)

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
      console.log(this.$route)
      if (this.currentMode === 'light') {
        this.currentMode = 'dark'
      } else {
        this.currentMode = 'light'
      }
    },
    changeTab (location) {
      this.$router.push(location)
    }
  },
  computed: {
    cssVars () {
      return {
        '--mdc-theme-on-primary': this.palette.common[this.currentMode].textColor,
        '--mdc-theme-background': this.palette.common[this.currentMode].bgColor,
        '--mdc-theme-primary': this.palette.common[this.currentMode].textColor
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
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  @import url("~material-components-vue/dist/button/button.min.css");
  @import url("~material-components-vue/dist/typography/typography.min.css");
  @import url("~material-components-vue/dist/top-app-bar/top-app-bar.min.css");
  @import url("~material-components-vue/dist/icon-button/icon-button.min.css");
  @import url("~material-components-vue/dist/tabs/tabs.min.css");

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    min-height: 100vh;
    transition: all 400ms ease;
  }

  .tabs {
    background: var(--tabs-bgcolor);
  }

  .mdc-top-app-bar {
    color: var(--name-color) !important;
  }

  .mdc-top-app-bar__row {
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
  }

  .mdc-top-app-bar__row a {
    color: var(--name-color);
    text-decoration: none;
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

  .artisr-router-animation-enter-active {
    animation: fade-in 1s;
    animation-delay: 0.5s;
    opacity: 0;
  }

  .artisr-router-animation-leave-active {
    animation: fade-out 1s;
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }
</style>
