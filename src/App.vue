<template>
  <div id="app">
    <nav>
      <h1><router-link to="/">Gallery</router-link></h1>
      <ul>
        <li><router-link to="/vanGogh">van Gogh</router-link></li>
        <li><router-link to="/klimt">Klimt</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

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
    color: #2c3e50;
    min-height: 100vh;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.3);
    height: 64px;
    padding: 0 3%;
    z-index: 2;
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

  main {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
  }
</style>
