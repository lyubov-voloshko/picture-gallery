<template>
  <div id="app" :style="cssVars">
    <nav>
      <h1><router-link to="/">Gallery</router-link></h1>
      <ul>
        <li><router-link to="/vanGogh">van Gogh</router-link></li>
        <li><router-link to="/klimt">Klimt</router-link></li>
        <li><button @click="switchTheme()">Switch Theme</button></li>
      </ul>
    </nav>
    <main>
      <router-view :mode="currentMode"/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentMode: 'light',
      modes: {
        dark: {
          bgColor: '#000',
          textColor: '#F5F5F5',
          navBoxShadow: '0 0 8px 1px rgba(255,255,255,0.8)'
        },
        light: {
          bgColor: '#fff',
          textColor: '#333',
          navBoxShadow: '0 0 2px 1px rgba(0,0,0,0.3)'
        }
      }
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
  },
  computed: {
    cssVars () {
      return {
        '--bg-color': this.modes[this.currentMode].bgColor,
        '--text-color': this.modes[this.currentMode].textColor,
        '--box-shadow-nav': this.modes[this.currentMode].navBoxShadow,
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: var(--bg-color);
    color: var(--text-color);
    min-height: 100vh;
    transition: all 400ms ease;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-color);
    box-sizing: border-box;
    box-shadow: var(--box-shadow-nav);
    height: 64px;
    padding: 0 3%;
    z-index: 2;
    transition: all 400ms ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li {
    display: inline-block;
    margin-left: 2vw;
  }

  li a {
    font-weight: 500;
    white-space: nowrap;
  }

  nav button {
    background: var(--text-color);
    border: none;
    border-radius: 4px;
    color: var(--bg-color);
    font-size: 0.875em;
    font-weight: 500;
    height: 24px;
    padding: 0 8px;
  }

  main {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
  }
</style>
