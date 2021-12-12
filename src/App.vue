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
  --color-text: #242629;
  --color-gray: #E6E6E6;
}

.primaryDark {
  background-color: var(--bg-color);
  color: var(--color-gray);
  transition: .5s;
}
.primaryLight {
  background-color: #fff;
  color: var(--color-text);
  transition: .5s;
}

.secondaryLight {
  background-color: #bebebe;
  color: var(--color-text);
    transition: .5s;
}
.secondaryDark {
  background-color: #242629;
  color: var(--color-gray);
      transition: .5s;
}

.tertiaryLight {
  background-color: transparent;
    color: var(--color-text);
}
.tertiaryDark {
  background-color: #caf6bb;
  color: var(--color-text);
}

.glass {
  background: rgba( 255, 255, 255, 0.4 );
  color: var(--color-text);
}

.glassDark {
  background-color: var(--bg-color);
  color: #fff;
}

.glassDark-btn {
  background-color: var(--bg-color);
  color: #fff;
}

.glassDark-btn:hover {
  color: #94ffd3;
  border: 2px solid #94ffd3;
}

html {
  scroll-behavior: smooth;
  /* font-size: 62.5%; */
  /* 1rem = 10px */
}

body {
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
