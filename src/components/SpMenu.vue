<template>
  <div>
    <div id="nav">
      <div class="logo">
          <h2>Sagb</h2>
          <h3>Dev</h3>
      </div>
      <sp-links/>
      <div v-show="showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#fff"/><path fill="#FFF" d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
      </div>
      <div v-show="!showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </div>
      <sp-links2 v-on:closeLinks="toggleMenu" v-show="!showButton"/>
    </div>
  </div>
</template>

<script>
import SpLinks from '@/components/SpLinks.vue';
import SpLinks2 from '@/components/SpLinks2.vue';

export default {
  name: 'QgMenu',
  components: { SpLinks, SpLinks2 },
  data() {
    return {
      showButton: true,
    };
  },
  methods: {
    toggleMenu() {
      this.$emit('activateZin', this.showButton);
      this.showButton = !this.showButton;
    },
  },
};
</script>

<style scoped>
#nav {
  width: 90%;
  /* background-color: lavender; */
  margin: auto;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

h2 {
  color: var(--bg-color);
  background-color: white;
  padding: 3px;
  width: 100px;
  letter-spacing: 2px;
  font-size: 18px;
  text-transform: uppercase;
}

h3 {
  color: white;
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav__menu-responsive {
  width: 20px;
  color: var(--white);
  display: none;
  cursor: pointer;
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .nav__links {
    display: none;
  }
  .nav__menu-responsive {
    display: flex;
    margin-right: 40px;
  }
  #nav {
    width: 100%;
    background-color: var(--bg-color);
    position: fixed;
    margin-top: -10px;
  }
  .logo {
    margin-left: 30px;
  }
}
</style>
