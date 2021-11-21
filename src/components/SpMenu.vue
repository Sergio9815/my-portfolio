<template>
  <div id="nav_bg">
    <div id="nav">
      <div class="logo">
          <h2>Sagb-</h2>
          <h3>Dev</h3>
      </div>
      <sp-links/>
      <div class="social">
        <sp-social-btn/>
      </div>
      <div v-show="showButton"
          @click="toggleMenu"
          v-animate-css.click="'flipInY'" class="nav__menu-responsive">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 3C5.34315 3 4 4.34315 4 6H20C20 4.34315 18.6569 3 17 3H7Z" fill="currentColor" /><path d="M7 11C5.34315 11 4 9.65685 4 8H20C20 9.65685 18.6569 11 17 11H7Z" fill="currentColor" /><path d="M7 13C5.34315 13 4 14.3431 4 16H20C20 14.3431 18.6569 13 17 13H7Z" fill="currentColor" /><path d="M7 21C5.34315 21 4 19.6569 4 18H20C20 19.6569 18.6569 21 17 21H7Z" fill="currentColor" /></svg>
      </div>
      <div v-show="!showButton"
          @click="toggleMenu"
          v-animate-css.click="'flipInY'" class="nav__menu-responsive">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z" fill="currentColor" /></svg>
      </div>
      <sp-links2 v-on:closeLinks="toggleMenu" v-show="!showButton"/>
    </div>
  </div>
</template>

<script>
import SpLinks from '@/components/SpLinks.vue';
import SpLinks2 from '@/components/SpLinks2.vue';
import SpSocialBtn from '@/components/SpSocialBtn.vue';

export default {
  name: 'QgMenu',
  components: { SpLinks, SpLinks2, SpSocialBtn },
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
#nav_bg {
  background-color: #242629;
}

#nav {
  width: 90%;
  margin: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 25px;
  text-transform: uppercase;
  margin: 0;
}

h3 {
  color: #caf6bb;
  font-size: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

.nav__menu-responsive {
  width: 20px;
  color: var(--white);
  display: none;
  cursor: pointer;
}

/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .nav__links, .social {
    display: none;
  }
  .nav__menu-responsive {
    display: flex;
    margin-right: 40px;
    color: white;
  }
  #nav {
    width: 100%;
    position: fixed;
    height: 60px;
    background-color: #242629;
    justify-content: space-between;
  }
  h2 {
    margin-left: 40px;
  }
  h3 {
    color: #C1B3FF;
  }
}
</style>
