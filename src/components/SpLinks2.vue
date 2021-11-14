<template>
    <section
          @click="toggleLinks" class="nav__links2 animate__animated animate__fadeInLeft">

        <router-link v-animate-css.hover="'pulse'" to="/"
          @click.native="scrollToId('goInicio')">
          Inicio
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'" to="/projects"
          @click.native="scrollToId('goProyectos')">
          Proyectos
        </router-link>

        <router-link v-animate-css.hover="'pulse'" to="/about"
          @click.native="scrollToId('goAbout')">
          Sobre mí
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'"
          to="/contact"
          @click.native="scrollToId('goContact')">
          Contacto
        </router-link>

        <sp-social-btn/>
    </section>
</template>

<script>
import SpSocialBtn from '@/components/SpSocialBtn.vue';

export default {
  name: 'SpLinks2',
  components: { SpSocialBtn },
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
    toggleLinks() {
      this.$emit('closeLinks');
    },
  },
};
</script>

<style scoped>

#nav a {
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.712);
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
}
.nav__menu-responsive {
  width: 20px;
  margin-right: 40px;
  color: rgba(255, 255, 255, 0.712);
  display: none;
  cursor: pointer;
}
.nav__links2 {
    display: none;
    position: fixed;
    padding-top: 30px;
    width: 100%;
    height: 88vh;
    background-color: var(--bg-color);
    top: 60px;
    left: -100%;
    text-align: center;
    transition: all .5s;
    z-index: 0;
}
#nav a.router-link-exact-active {
  color: rgba(255, 255, 255, 0.712);
  border-bottom: 2px solid rgba(255, 255, 255, 0.712);
}
/* --- --- -- Responsive design -- --- --- */
@media only screen and (max-width: 1000px) {
  .nav__links2 {
    display: flex;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  #nav a:hover {
    color: white;
  }
}
</style>
