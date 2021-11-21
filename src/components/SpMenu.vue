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
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-lines" class="svg-inline--fa fa-grip-lines fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
      </div>
      <div v-show="!showButton"
          @click="toggleMenu"
          v-animate-css.click="'rotateIn'" class="nav__menu-responsive">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="not-equal" class="svg-inline--fa fa-not-equal fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32h-23.88l51.87-66.81c5.37-7.02 4.04-17.06-2.97-22.43L415.61 3.3c-7.02-5.38-17.06-4.04-22.44 2.97L311.09 112H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h204.56l-74.53 96H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h55.49l-51.87 66.81c-5.37 7.01-4.04 17.05 2.97 22.43L64 508.7c7.02 5.38 17.06 4.04 22.43-2.97L168.52 400H416c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32H243.05l74.53-96H416z"></path></svg>
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
  background-color: #1d1d1d;
}

#nav {
  width: 90%;
  margin: auto;
  height: 60px;
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
    background-color: #1d1d1d;
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
