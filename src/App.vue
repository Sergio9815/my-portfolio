<template>
  <div id="app">
    <sp-menu/>
    <router-view/>
    <contact/>
  </div>
</template>

<script>
import Contact from '@/views/Contact.vue';
import SpMenu from '@/components/SpMenu.vue';

export default {
  name: 'App',
  components: {
    Contact,
    SpMenu,
  },
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>
<style>
/* --- --- -- COLORS -- --- --- */
:root {
  --bg-color: #16161A;
  --in-color:  rgba(212, 212, 255, 0.035);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #242629;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1b2a;
}

/* --- --- -- LOCAL FONTS -- --- --- */
@font-face {
  font-family: 'Source Sans Pro';
  src: local('Source Sans Pro'),
    url('./assets/fonts/SourceSansPro-Regular.ttf') format('truetype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Raleway';
  src: local('Raleway'),
    url('./assets/fonts/Raleway-VariableFont_wght.ttf') format('truetype');
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: 'Lato';
  src: local('Lato'),
    url('./assets/fonts/Lato-Regular.ttf') format('truetype');
  font-weight: 300;
  font-display: swap;
}
</style>
