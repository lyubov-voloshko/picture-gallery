<template>
  <div id="app" :style="cssVars">
    <m-top-app-bar :style="topBarColors">
      <m-typography>
        <m-typo-headline :level="5">
          <router-link to="/">Gallery</router-link>
        </m-typo-headline>
      </m-typography>

      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <m-icon
          icon="invert_colors"
          slot="actions"
          @click="switchTheme()"/>

        <m-button unelevated="currentMode === 'light'" :style="buttonColors" @click="switchTheme()">{{ currentMode }} theme</m-button>
      </section>
    </m-top-app-bar>
    <m-top-app-bar-fixed-adjust>
      <m-tab-bar scrollable>
        <app-m-tab-scroller align="center">
           <app-tab href="/vanGogh" :minWidth="true">
            van Gogh
          </app-tab>
          <app-tab href="/klimt" :minWidth="true">
            Klimt
          </app-tab> 
        </app-m-tab-scroller>
      </m-tab-bar>
      <router-view :mode="currentMode"/>
    </m-top-app-bar-fixed-adjust>
  </div>
</template>

<script>
import palette from './assets/palette'
import Button from 'material-components-vue/dist/button'
import Headline from 'material-components-vue/dist/typography'
import NavBar from 'material-components-vue/dist/top-app-bar'
import Icon from 'material-components-vue/dist/icon'
import TabBar from 'material-components-vue/dist/tabs'
import TabScroller from './components/material/TabScroller'
import Tab from './components/material/Tab'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Headline)
Vue.use(NavBar)
Vue.use(Icon)
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
      if (this.currentMode === 'light') {
        this.currentMode = 'dark'
      } else {
        this.currentMode = 'light'
      }
    },
    changeTab (location) {
      console.log(Tab);
      this.$router.push(location);
    }
  },
  computed: {
    cssVars () {
      return {
        '--mdc-theme-on-primary': this.palette.common[this.currentMode].textColor,
        '--mdc-theme-background': this.palette.common[this.currentMode].bgColor,
        '--mdc-theme-primary': this.palette.common[this.currentMode].textColor,
      }
    },
    topBarColors () {
      return {
        '--mdc-theme-primary': this.palette.common[this.currentMode].bgColor,
      }
    }
  }
}
</script>

<style>

  @import url("~material-components-vue/dist/button/button.min.css");
  @import url("~material-components-vue/dist/typography/typography.min.css");
  @import url("~material-components-vue/dist/top-app-bar/top-app-bar.min.css");
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
  .mdc-top-app-bar__row {
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
  }

  .actions {
    display: flex;
    align-items: center;
  }

  .actions a {
    margin-left: 12px;
  }

  .actions button {
    margin-left: 20px;
  }

  main {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
  }
</style>
