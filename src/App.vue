<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* --- --- -- COLORS -- --- --- */
:root {
  --bg-color: #1c1b2a;
  --in-color:  rgba(212, 212, 255, 0.035);
}

body {
  background-color: var(--bg-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1b2a;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* --- --- -- LOCAL FONTS -- --- --- */
@font-face {
  font-family: 'Source Sans Pro';
  src: local('Source Sans Pro'),
    url('./assets/fonts/SourceSansPro-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}

</style>
